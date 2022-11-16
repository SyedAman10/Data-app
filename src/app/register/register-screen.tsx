import React, {useState} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Btn from '../../components/button/Btn';
import Icongraphy from '../../infrastructure/theme/Icongraphy';
import Input from '../../components/Input/input-field';
import Typography from '../../infrastructure/theme/Typography';
import {Space} from '../../components/spacer/spacer-component';
import {BASE_URL} from '../../config/config';
import axios from 'axios';
import {
  RegisterHeading,
  RegisterInputContainer,
  RegisterScreenView,
  Description,
  RegisterButtonContainer,
  LoginContainer,
} from './register-screen-styles';

const RegisterScreen = (props: any) => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Address, setAddress] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const onRegister = async () => {
    const response = await axios({
      url: `${BASE_URL}/auth/local/register`,
      method: 'POST',
      data: {
        username: `${FirstName} ${LastName}`,
        email: Email,
        password: Password,
      },
    });
    if (response && response?.data?.jwt) {
      AsyncStorage.setItem('token', response?.data?.jwt);
      props.navigation.navigate('ProfileScreen');
    } else {
      Alert.alert('Unable to login');
    }
  };

  return (
    <RegisterScreenView
      contentContainerStyle={{
        alignItems: 'center',
      }}>
      <RegisterHeading>
        <Typography varient="heading" spacing={10}>
          Hello!
        </Typography>
        <Description>
          <Typography varient="text1" textAlign="center" spacing={5}>
            Creating your account will store your preferences so that you do not
            have to retype your data again
          </Typography>
          <Typography varient="subheading1" textAlign="center">
            Create an account
          </Typography>
        </Description>
      </RegisterHeading>

      <RegisterInputContainer>
        <Input
          type="text"
          label="First Name"
          placeholder="First Name"
          right={<Icongraphy family="FontAwesome" name="user" />}
          value={FirstName}
          onChangeText={(val: string) => setFirstName(val)}
        />
        <Space />
        <Input
          type="text"
          label="Last Name"
          placeholder="Last Name"
          right={<Icongraphy family="Entypo" name="user" />}
          value={LastName}
          onChangeText={(val: string) => setLastName(val)}
        />
        <Space />
        <Input
          type="text"
          label="Phone"
          placeholder="Phone"
          right={<Icongraphy family="FontAwesome" name="phone" />}
          value={Phone}
          onChangeText={(val: string) => setPhone(val)}
        />
        <Space />
        <Input
          type="text"
          label="Address"
          placeholder="Address"
          right={<Icongraphy family="Entypo" name="location-pin" />}
          value={Address}
          onChangeText={(val: string) => setAddress(val)}
        />
        <Space />
        <Input
          type="text"
          label="Username / Email"
          placeholder="Username / Email"
          right={<Icongraphy family="FontAwesome" name="envelope" />}
          value={Email}
          onChangeText={(val: string) => setEmail(val)}
        />
        <Space />
        <Input
          type="text"
          label="Password"
          placeholder="Password"
          secureTextEntry={true}
          right={<Icongraphy family="Entypo" name="lock" />}
          value={Password}
          onChangeText={(val: string) => setPassword(val)}
        />
        <Space />
      </RegisterInputContainer>
      <RegisterButtonContainer>
        <Input type="checkbox" label={'Do You agree with Terms & Conditions'} />
        <Btn
          title="Sign Up"
          varient="filled"
          component="primaryBtn"
          onTap={() => onRegister()}
          textVarient="subheading1"
        />
        <LoginContainer>
          <Typography varient="text1">Already have an account?</Typography>
          <Btn
            varient="text"
            component="minimum"
            title="Login"
            onTap={() => props.navigation.navigate('LoginScreen')}
          />
        </LoginContainer>
      </RegisterButtonContainer>
    </RegisterScreenView>
  );
};
export default RegisterScreen;
