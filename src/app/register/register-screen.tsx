import React from 'react';
import {Space} from '../../components/spacer/spacer-component';
import Input from '../../components/Input/input-field';
import {
  LoginButton,
  AuthButton,
  RegisterButtonContainer,
  Text,
  Description,
  RegisterHeading,
  RegisterView,
  RegisterInputContainer,
  LoginContainer,
} from './register-style';
import {SafeArea} from '../../components/utility/safe-area.component';

const RegisterScreen = () => {
  return (
    <SafeArea>
      <RegisterView
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <RegisterHeading>
          <Text varient="heading" spacing={10}>
            Hello!
          </Text>
          <Description>
            <Text varient="text1" textAlign="center" spacing={5}>
              Creating your account will store your preferences so that you do
              not have to retype your data again
            </Text>
            <Text varient="subheading1" textAlign="center">
              Create an account
            </Text>
          </Description>
        </RegisterHeading>
        <RegisterInputContainer>
          <Space>
            <Input type="text" label="First Name" placeholder="First Name" />
          </Space>
          <Space>
            <Input type="text" label="Last Name" placeholder="Last Name" />
          </Space>
          <Space>
            <Input type="text" label="Phone" placeholder="Phone" />
          </Space>
          <Space>
            <Input type="text" label="Address" placeholder="Address" />
          </Space>
          <Space>
            <Input
              type="text"
              label="Username / Email"
              placeholder="Username / Email"
            />
          </Space>
          <Space>
            <Input
              type="text"
              label="Password"
              placeholder="Password"
              secureTextEntry={true}
            />
          </Space>
        </RegisterInputContainer>
        <RegisterButtonContainer>
          <AuthButton
            uppercase={false}
            mode="contained"
            labelStyle={{color: 'white', fontSize: 16}}>
            Sign Up
          </AuthButton>
          <LoginContainer>
            <Text varient="text1">Already have an account?</Text>
            <LoginButton labelStyle={{fontSize: 12}} uppercase={false}>
              Login
            </LoginButton>
          </LoginContainer>
        </RegisterButtonContainer>
      </RegisterView>
    </SafeArea>
  );
};
export default RegisterScreen;
