import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';
import {HotspotContainer, HotspotView} from './choose-hotspot.style';
import Typography from '../../infrastructure/theme/Typography';
import {MarginT} from '../../components/spacer/spacer-component';
import Btn from '../../components/button/Btn';

const ChooseHotspotScreen = (props: any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <HotspotView>
          <HotspotContainer>
            <MarginT />
            <Typography varient="heading" spacing={10}>
              Choose {'\n'}your Device
            </Typography>
            <Typography varient="text" color="#7FBF4E">
              What kind of Device do you {'\n'}wish to add ?
            </Typography>
            <Btn
              title="peerOs Device 1"
              varient="white"
              component="primaryBtn"
              textVarient="subheading1"
              spacing={10}
              onTap={() => props.navigation.navigate('ChooseAuthScreen')}
            />
            <Btn
              title="peerOs Device 2"
              varient="filled"
              component="primaryBtn"
              textVarient="subheading1"
              spacing={10}
              onTap={() => console.log('press')}
            />
          </HotspotContainer>
        </HotspotView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ChooseHotspotScreen;
