import React from 'react';
import {ScrollView} from 'react-native';
import {MarginB} from '../../components/spacer/spacer-component';
import Btn from '../../components/button/Btn';
import Typography from '../../infrastructure/theme/Typography';
import {MarginT} from '../../components/spacer/spacer-component';
import {EmailCheckContainer, EmailCheckView} from './check-email.styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const CheckMailScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <EmailCheckView>
          <EmailCheckContainer>
            <MarginT />
            <Typography varient="heading" spacing={10}>
              Check Your Mail
            </Typography>
            <MarginB />
            <Typography varient="text1" textAlign="center" spacing={10}>
              We have send password recover instructions {'\n'} to your mail
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
          </EmailCheckContainer>
        </EmailCheckView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CheckMailScreen;
