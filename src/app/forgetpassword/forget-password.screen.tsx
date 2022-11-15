import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Btn from '../../components/button/Btn';
import Icongraphy from '../../infrastructure/theme/Icongraphy';
import Input from '../../components/Input/input-field';
import Typography from '../../infrastructure/theme/Typography';
import {ForgetPasswordView, ForgetPassContainer} from './forget-password.style';
import {Space} from '../../components/spacer/spacer-component';

const ForgotPasswordScreen = (props: any) => (
  <ForgetPasswordView>
    <ForgetPassContainer>
      <Typography varient="heading" spacing={10}>
        Password Reset
      </Typography>
      <Typography varient="text1" textAlign="center" spacing={10}>
        Enter your email or mobile number below and we will send you a
        verification code to reset your password.
      </Typography>

      <Input
        type="text"
        label="Username or Email"
        placeholder="Username or Email"
        right={<Icongraphy family="FontAwesome" name="envelope" />}
        spacing={20}
      />
      <Space />
      <Btn
        title="Send"
        varient="filled"
        component="primaryBtn"
        textVarient="subheading1"
        spacing={20}
      />
    </ForgetPassContainer>
  </ForgetPasswordView>
);
export default ForgotPasswordScreen;
