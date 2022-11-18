import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';
import Typography from '../../infrastructure/theme/Typography';
import {GatewayContainer, GatewayView} from './gateway-styles';
import {MarginT} from '../../components/spacer/spacer-component';
import Btn from '../../components/button/Btn';
const GatewayScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <GatewayView>
          <GatewayContainer>
            <MarginT />
            <Typography varient="heading" spacing={10}>
              {'     Gateway Authenticated'}
            </Typography>
            <Typography varient="text" color="#7FBF4E">
              Press button to continue
            </Typography>
            <MarginT />
            <Btn
              title="Set Device Location"
              varient="filled"
              component="primaryBtn"
              textVarient="subheading1"
              spacing={10}
              onTap={() => console.log('press')}
            />
          </GatewayContainer>
        </GatewayView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default GatewayScreen;
