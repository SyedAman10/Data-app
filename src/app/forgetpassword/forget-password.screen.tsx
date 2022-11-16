import React from 'react';
import Btn from '../../components/button/Btn';
import Icongraphy from '../../infrastructure/theme/Icongraphy';
import Input from '../../components/Input/input-field';
import Typography from '../../infrastructure/theme/Typography';
import {ForgetPasswordView, ForgetPassContainer} from './forget-password.style';
import {MarginB, Space} from '../../components/spacer/spacer-component';
import {MarginTop} from '../check-email/check-email.styles';

const ForgotPasswordScreen = (props: any) => (
  <ForgetPasswordView>
    <ForgetPassContainer>
      <MarginTop>
        <Typography varient="heading" spacing={10}>
          Password Reset
        </Typography>
        <MarginB />
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
      </MarginTop>
    </ForgetPassContainer>
  </ForgetPasswordView>
);
export default ForgotPasswordScreen;
