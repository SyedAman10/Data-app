import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../app/login/login-screen';
import RegisterScreen from '../app/register/register-screen';
import ContactUsScreen from '../app/contact-us/contact-us.screen';
import ChangePasswordScreen from '../app/change-password/change-password.screen';
import ForgotPasswordScreen from '../app/forgetpassword/forget-password.screen';
import ProfileScreen from '../app/profile-screen/profile-screen';
import CheckMailScreen from '../app/check-email/check-email.screen';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
      initialRouteName="CheckMailScreen">
      <Stack.Screen name="CheckMailScreen" component={CheckMailScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} />

      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
