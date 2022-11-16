import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Btn from '../../components/button/Btn';
import {Space} from '../../components/spacer/spacer-component';
import Typography from '../../infrastructure/theme/Typography';
import {MarginTop} from '../check-email/check-email.styles';
import {SelectionView, SelectionScreenContainer} from './select-screen';

const SelectionScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <SelectionView>
          <SelectionScreenContainer>
            <MarginTop>
              <Typography varient="heading" spacing={10}>
                Select an option
              </Typography>
              <Space />
              <Btn
                title="Setup Device"
                varient="filled"
                component="primaryBtn"
                textVarient="subheading1"
                spacing={10}
              />
              <Btn
                title="Continue to Data Marketplace"
                varient="filled"
                component="primaryBtn"
                textVarient="subheading1"
                spacing={10}
              />
            </MarginTop>
          </SelectionScreenContainer>
        </SelectionView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SelectionScreen;
