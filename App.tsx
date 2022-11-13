import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {View, ActivityIndicator} from 'react-native';
import React, {useState, useContext} from 'react';
import AppNav from './src/navigation/app-nav';
import StackNavigator from './src/navigation/StackNavigator';
import StorybookUI from './storybook';
import Config from 'react-native-config';
import WalletConnectProvider from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from './src/context/auth-context';
import {AuthProvider} from './src/context/auth-context';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('dark');
  let MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#0DB6AB',
      primary2: '#7FBF4E',
      primary3: '#008000',
      secondary: '#1D1D1D',
      secondary2: '#3D3D3d',
      secondary3: '#B3B6Bf',
      background: 'rgba(255,255,255,1)',
      background2: 'rgba(247,249,255,1)',
      background3: 'rgba(190,184,228,1)',
      container: 'rgba(242, 242, 242, 1)',
      lightDark: '#B3B6BF',
      black: 'rgba(0, 0, 0, 1)',
      halfBlack: 'rgba(0, 0, 0, 0.5)',
      halfWhite: 'rgba(255, 255, 255, 0.5)',
      half: 'rgba(33, 3, 224, 0.2)',
      card: 'white',
      containerText: 'rgba(179, 182, 191, 1)',
      text: '#3D3D3D',
      warning: '#EDAA25',
      info: '#2103E0',
      danger: '#B91E42',
    },
  };
  if (currentTheme === 'dark') {
    MyTheme = {
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        primary: '#0DB6AB',
        primary2: '#7FBF4E',
        primary3: '#008000',
        secondary: '#1D1D1D',
        secondary2: '#3D3D3d',
        secondary3: '#B3B6Bf',
        background: '#08131B',
        background2: 'rgba(29,29,29,1)',
        background3: 'rgba(29,29,29,1)',
        container: 'rgba(73,73,74,1)',
        lightDark: '#B3B6BF',
        black: 'rgba(0, 0, 0, 1)',
        halfBlack: 'rgba(0, 0, 0, 0.5)',
        halfWhite: 'rgba(255, 255, 255, 0.5)',
        half: 'rgba(33, 3, 224, 0.2)',
        card: 'rgba(73,73,74,1)',
        containerText: 'rgba(242, 242, 242, 1)',
        warning: '#EDAA25',
        text: '#B3B6BF',
        info: '#2103E0',
        danger: '#B91E42',
      },
    };
  }
  return (
    <AuthProvider>
        <AppNav />
      </AuthProvider>
  );
};

export default Config.LOAD_STORYBOOK === 'true' ? StorybookUI : App;
