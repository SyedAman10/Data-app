import React from 'react';
import {Space} from '../../components/spacer/spacer-component';
import Input from '../../components/Input/input-field';
import {SafeArea} from '../../components/utility/safe-area.component';
import {
  Text,
  ForgetPasswordView,
  ForgetPassContainer,
} from './forgetpassword-style';
import {Button} from 'react-native-paper';
const ForgetPasswordScreen = () => {
  return (
    <SafeArea>
      <ForgetPasswordView>
        <ForgetPassContainer>
          <Text varient="heading" spacing={35}>
            Password Reset
          </Text>
          <Text varient="text1" textAlign="center" spacing={14}>
            Enter your email or mobile number below and we will send you a
            verification code to reset your password.
          </Text>
          <Space>
            <Input
              type="text"
              label="Username or Email"
              placeholder="Username or Email"
            />
          </Space>
          <Button
            uppercase={false}
            mode="contained"
            color="#3ac4bb"
            labelStyle={{color: 'white', fontSize: 10}}>
            Send Instructions
          </Button>
        </ForgetPassContainer>
      </ForgetPasswordView>
    </SafeArea>
  );
};
export default ForgetPasswordScreen;
