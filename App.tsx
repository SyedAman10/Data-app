import React from 'react';

import {SafeArea} from './src/components/utility/safe-area.component';
import {LoginScreen} from './src/app/login/login-screen';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/infrastructure/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeArea>
        <LoginScreen />
      </SafeArea>
    </ThemeProvider>
  );
};

export default App;
