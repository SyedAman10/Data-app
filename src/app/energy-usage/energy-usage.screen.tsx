import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';
import EnergyUsageCard from '../../modals/energy-usage.card/energy-usage.card';

const EnergyUsageScreen = () => {
  // const DATA = [
  //   {id: 28, Title: 'Sweden', Status: 1},
  //   {id: 56, Title: 'USA', Status: 1},
  //   {id: 89, Title: 'England', Status: 1},
  //   {id: 89, Title: 'England', Status: 2},
  //   {id: 89, Title: 'England', Status: 2},
  //   {id: 89, Title: 'England', Status: 3},
  // ];

  // function filterArray(array, status) {
  //   return array.filter(item => item.Status === status);
  // }

  // const statusOneArray = filterArray(DATA, 1);
  // console.log(statusOneArray);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{margin: 15, marginBottom: 40}}>
          <EnergyUsageCard />
          <EnergyUsageCard />
          <EnergyUsageCard />
          <EnergyUsageCard />
          <EnergyUsageCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default EnergyUsageScreen;
