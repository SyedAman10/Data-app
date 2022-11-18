import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';
import {AuthContainer, AuthView} from './choose-auth.styles';
import {MarginT} from '../../components/spacer/spacer-component';
import Typography from '../../infrastructure/theme/Typography';
import Btn from '../../components/button/Btn';
const ChooseAuthScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <AuthView>
          <AuthContainer>
            <MarginT />
            <Typography varient="heading" spacing={10}>
              Choose {'\n'}Auth Method.
            </Typography>
            <Typography varient="text" color="#7FBF4E">
              How do you want to auth
            </Typography>
            <Btn
              title="Connect with Wifi"
              varient="white"
              component="primaryBtn"
              textVarient="subheading1"
              spacing={10}
              onTap={() => console.log('press')}
            />
            <Btn
              title="Connect with Lora"
              varient="filled"
              component="primaryBtn"
              textVarient="subheading1"
              spacing={10}
              onTap={() => console.log('press')}
            />
          </AuthContainer>
        </AuthView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ChooseAuthScreen;
