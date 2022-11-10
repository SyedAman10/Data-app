import React from 'react';

import Input from '../../components/Input/input-field';
import {SafeArea} from '../../components/utility/safe-area.component';
import {
  Text,
  SignUpContainer,
  SignUpButton,
  LoginView,
  LoginHeading,
  LoginInputContainer,
  Space,
  ForgetPasswordContainer,
  AuthButton,
  LoginButtonContainer,
  ForgetPassButton,
} from './login_style';

export const LoginScreen = ({}) => {
  return (
    <SafeArea>
      <LoginView
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <LoginHeading>
          <Text varient="heading">Welcome</Text>
          <Text varient="subheading1" spacing={5}>
            Login To Your Account
          </Text>
        </LoginHeading>
        <LoginInputContainer>
          <Input
            type="text"
            label="Username / Email"
            placeholder="Username / Email"
          />
          <Space>
            <Input
              type="text"
              label="Password"
              placeholder="Password"
              secureTextEntry={true}
            />
          </Space>

          <ForgetPasswordContainer>
            <ForgetPassButton
              uppercase={false}
              labelStyle={{fontSize: 12}}
              mode="text"
              onPress={() => console.log('Pressed')}>
              Forget Password?
            </ForgetPassButton>
          </ForgetPasswordContainer>
        </LoginInputContainer>
        <LoginButtonContainer>
          <AuthButton
            uppercase={false}
            mode="contained"
            labelStyle={{color: 'white', fontSize: 16}}>
            Login
          </AuthButton>
          <SignUpContainer>
            <Text varient="text1">Don't have an account?</Text>
            <SignUpButton labelStyle={{fontSize: 12}} uppercase={false}>
              SignUp
            </SignUpButton>
          </SignUpContainer>
        </LoginButtonContainer>
      </LoginView>
    </SafeArea>
  );
};
