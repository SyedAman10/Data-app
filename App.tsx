import React from 'react';

import {ThemeProvider} from 'styled-components';
import {theme} from './src/infrastructure/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ForgetPasswordScreen from './src/app/forgetpassword/forgetpassword-screen';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider style={{backgroundColor:"#08131b"}}>
        <ForgetPasswordScreen />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
