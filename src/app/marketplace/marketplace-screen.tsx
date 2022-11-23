import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';
import MarketplaceCard from '../../modals/marketplace-card/marketplace-card';

const MarketplaceScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{margin: 15, marginBottom: 40}}>
          <MarketplaceCard />
          <MarketplaceCard />
          <MarketplaceCard />
          <MarketplaceCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MarketplaceScreen;
