import React, {useState} from 'react';
import {Alert} from 'react-native';
import Btn from '../../components/button/Btn';
import Icongraphy from '../../infrastructure/theme/Icongraphy';
import Input from '../../components/Input/input-field';
import Typography from '../../infrastructure/theme/Typography';
import {Space} from '../../components/spacer/spacer-component';
import {BASE_URL} from '../../config/config';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SignUpContainer,
  LoginButtonContainer,
  LoginHeading,
  LoginScreenView,
  ForgetPasswordContainer,
  LoginInputContainer,
} from './login-screen-styles';

const LoginScreen = (props: any) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const onLogin = () => {
    axios
      .post(`${BASE_URL}/auth/local`, {
        identifier: Email,
        password: Password,
      })
      .then(response => {
        AsyncStorage.setItem('token', response?.data?.jwt);
        props.navigation.navigate('ConnectWalletScreen');
      })
      .catch(e => {
        Alert.alert(`Unable to login. Please try again ${e}`);
      });
  };
  return (
    <LoginScreenView
      contentContainerStyle={{
        alignItems: 'center',
      }}>
      <LoginHeading>
        <Typography varient="heading">Welcome</Typography>
        <Typography varient="subheading1" spacing={5}>
          Login To Your Account
        </Typography>
      </LoginHeading>

      <LoginInputContainer>
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
        <ForgetPasswordContainer>
          <Btn
            title="Forgot Password?"
            varient="text"
            onTap={() => props.navigation.navigate('ForgotPasswordScreen')}
          />
        </ForgetPasswordContainer>
      </LoginInputContainer>
      <LoginButtonContainer>
        <Btn
          title="Login"
          varient="filled"
          component="primaryBtn"
          loadingColor="white"
          onTap={() => onLogin()}
        />
        <SignUpContainer>
          <Typography varient="text1">Don't have an account?</Typography>
          <Btn
            varient="text"
            component="minimum"
            title="Sign Up"
            onTap={() => props.navigation.navigate('RegisterScreen')}
          />
        </SignUpContainer>
      </LoginButtonContainer>
    </LoginScreenView>
  );
};
export default LoginScreen;
