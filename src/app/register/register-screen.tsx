import React, {useState, useContext} from 'react';
import Btn from '../../components/button/Btn';
import Icongraphy from '../../infrastructure/theme/Icongraphy';
import Input from '../../components/inputfield/InputField';
import Typography from '../../infrastructure/theme/Typography';
import {Space} from '../../components/spacer/spacer-component';
import {
  RegisterHeading,
  RegisterInputContainer,
  RegisterScreenView,
  Description,
  RegisterButtonContainer,
  LoginContainer,
} from './register-screen-styles';
import { AuthContext } from '../../context/auth-context';

const RegisterScreen = (props: any) => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Address, setAddress] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const {logout} = useContext(AuthContext);
  return (
    <RegisterScreenView
      contentContainerStyle={{
        alignItems: 'center',
      }}>
      <RegisterHeading>
        <Typography varient="heading" spacing={10}>
          Hello!
        </Typography>
        <Description style={{width: '70%', alignSelf: 'center'}}>
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
          spacing={20}
          removeClippedSubviews={true}
          enablesReturnKeyAutomatically={true}
          blurOnSubmit={false}
          returnKeyType="next"
          value={FirstName}
          onChangeText={(val: string) => setFirstName(val)}
        />
        <Space />
        <Input
          type="text"
          label="Last Name"
          placeholder="Last Name"
          right={<Icongraphy family="Entypo" name="user" />}
          removeClippedSubviews={true}
          enablesReturnKeyAutomatically={true}
          blurOnSubmit={true}
          returnKeyType="go"
          value={LastName}
          onChangeText={(val: string) => setLastName(val)}
        />
        <Space />
        <Input
          type="text"
          label="Phone"
          placeholder="Phone"
          right={<Icongraphy family="FontAwesome" name="phone" />}
          spacing={20}
          removeClippedSubviews={true}
          enablesReturnKeyAutomatically={true}
          blurOnSubmit={false}
          returnKeyType="next"
          value={Phone}
          onChangeText={(val: string) => setPhone(val)}
        />
        <Space />
        <Input
          type="text"
          label="Address"
          placeholder="Address"
          secureTextEntry={true}
          right={<Icongraphy family="Entypo" name="location-pin" />}
          removeClippedSubviews={true}
          enablesReturnKeyAutomatically={true}
          blurOnSubmit={true}
          returnKeyType="go"
          value={Address}
          onChangeText={(val: string) => setAddress(val)}
        />
        <Space />
        <Input
          type="text"
          label="Username / Email"
          placeholder="Username / Email"
          right={<Icongraphy family="FontAwesome" name="envelope" />}
          spacing={20}
          removeClippedSubviews={true}
          enablesReturnKeyAutomatically={true}
          blurOnSubmit={false}
          returnKeyType="next"
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
          removeClippedSubviews={true}
          enablesReturnKeyAutomatically={true}
          blurOnSubmit={true}
          returnKeyType="go"
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
          onTap={() => logout()}
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
