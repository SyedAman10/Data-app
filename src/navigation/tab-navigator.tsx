import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image} from 'react-native';
import HomeScreen from '../app/home/home-screen';
import MarketplaceScreen from '../app/marketplace/marketplace-screen';
import EnergyUsageScreen from '../app/energy-usage/energy-usage.screen';
import NotificationsScreen from '../app/notifications/notifications-screen';
const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => null,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/icons/marketplace.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#7FBF4E' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/icons/notification.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#7FBF4E' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="EnergyUsage"
        component={EnergyUsageScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/icons/email-line.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#7FBF4E' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Marketplace"
        component={MarketplaceScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/icons/home.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#7FBF4E' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;
