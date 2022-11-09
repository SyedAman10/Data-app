import React from 'react';
import {ScrollView, Text} from 'react-native';

import {SafeArea} from './src/components/utility/safe-area.component';
const App = () => {
  return (
    <SafeArea>
      <ScrollView>
        <Text>Welcome</Text>
      </ScrollView>
    </SafeArea>
  );
};

export default App;
