import React, {useState} from 'react';
import {View, ImageBackground, Switch} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';
import {assets} from '../../utilities/asstes';
import Typography from '../../infrastructure/theme/Typography';
import moment from 'moment';
import HomeScreenCard from '../../modals/home-card/home-card.component';
const HomeScreen = (props: any) => {
  const CurrentDate = moment(new Date()).format('MMMM D, YYYY'); //
  function renderBanner() {
    return (
      <View style={{flex: 1, width: '93%'}}>
        <ImageBackground
          resizeMode="stretch"
          borderRadius={20}
          source={assets.defaultCover}
          style={{
            margin: 10,
            width: '100%',
            height: 160,
          }}>
          <View style={{position: 'absolute', top: 15, left: 10}}>
            <Typography varient="text1" spacing={5}>
              {CurrentDate}
            </Typography>
            <Typography varient="subheading1">Energy Saving</Typography>
            <Typography varient="heading" spacing={5}>
              45%
            </Typography>
            <Typography varient="text2">25.5 kwh</Typography>
          </View>
        </ImageBackground>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flex: 1, marginBottom: 40}}>
          {renderBanner()}
          <View style={{marginLeft: 11}}>
            <Typography varient="heading2" spacing={5}>
              My device
            </Typography>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              margin: 10,
              justifyContent: 'space-around',
            }}>
            <HomeScreenCard />
            <HomeScreenCard />
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
