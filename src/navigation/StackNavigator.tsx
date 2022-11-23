import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../app/login/login-screen';
import RegisterScreen from '../app/register/register-screen';
import ContactUsScreen from '../app/contact-us/contact-us.screen';
import ChangePasswordScreen from '../app/change-password/change-password.screen';
import ForgotPasswordScreen from '../app/forgetpassword/forget-password.screen';
import ProfileScreen from '../app/profile-screen/profile-screen';
import CheckMailScreen from '../app/check-email/check-email.screen';
import SelectionScreen from '../app/selection-process/select-screen.styles';
import GatewayScreen from '../app/gateway/gateway-screen';
import ChooseHotspotScreen from '../app/choose-hotspot/choose-hotspot.screen';
import ChooseAuthScreen from '../app/choose-auth/choose-auth.screen';
import ConnectWalletScreen from '../app/connect_wallet/connect-wallet.screen';
import ChooseDeviceScreen from '../app/choose-device/choose-device.screen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
      initialRouteName="ChooseDeviceScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="SelectionScreen" component={SelectionScreen} />
      <Stack.Screen name="CheckMailScreen" component={CheckMailScreen} />
      <Stack.Screen name="GatewayScreen" component={GatewayScreen} />
      <Stack.Screen
        name="ChooseHotspotScreen"
        component={ChooseHotspotScreen}
      />
      <Stack.Screen name="ChooseAuthScreen" component={ChooseAuthScreen} />
      <Stack.Screen
        name="ConnectWalletScreen"
        component={ConnectWalletScreen}
      />
      <Stack.Screen name="ChooseDeviceScreen" component={ChooseDeviceScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
