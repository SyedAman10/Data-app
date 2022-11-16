import React from 'react';
import {MarginB} from '../../components/spacer/spacer-component';
import Btn from '../../components/button/Btn';
import Typography from '../../infrastructure/theme/Typography';
import {
  EmailCheckContainer,
  EmailCheckView,
  MarginTop,
} from './check-email.styles';

const CheckMailScreen = () => {
  return (
    <EmailCheckView>
      <EmailCheckContainer>
        <MarginTop>
          <Typography varient="heading" spacing={10}>
            Check Your Mail
          </Typography>
          <MarginB />
          <Typography varient="text1" textAlign="center" spacing={10}>
            We have send password recover instructions to your mail check your
            mail
          </Typography>
          <Btn
            title="Reset Password"
            varient="filled"
            component="primaryBtn"
            textVarient="subheading1"
            spacing={10}
          />
          <Btn
            varient="text"
            component="minimum"
            title="Skip I will confirm later"
          />
        </MarginTop>
      </EmailCheckContainer>
    </EmailCheckView>
  );
};
export default CheckMailScreen;
