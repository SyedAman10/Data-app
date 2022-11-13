import React, {useState, useContext} from 'react';
import Btn from '../../components/button/Btn';
import Icongraphy from '../../infrastructure/theme/Icongraphy';
import Input from '../../components/inputfield/InputField';
import Typography from '../../infrastructure/theme/Typography';
import {Space} from '../../components/spacer/spacer-component';
import {Text} from 'react-native';
import {
  SignUpContainer,
  LoginButtonContainer,
  LoginHeading,
  LoginScreenView,
  ForgetPasswordContainer,
  LoginInputContainer,
} from './login-screen-styles';
import { AuthContext } from '../../context/auth-context';

const LoginScreen = (props: any) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const {login} = useContext(AuthContext);
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
          spacing={20}
          removeClippedSubviews={true}
          enablesReturnKeyAutomatically={true}
          blurOnSubmit={false}
          returnKeyType="next"
          value={Email}
          onChangeText={text => setEmail(text)}
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
          onChangeText={text => setPassword(text)}
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
          onTap={() => login(Email, Password)}
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
