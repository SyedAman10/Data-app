import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Home Screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
