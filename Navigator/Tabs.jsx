import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreens from '../Screens/Home/HomeScreens';
import NotificationScreens from '../Screens/NotificationScreens/NotificationScreens';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreens} />
        <Tab.Screen name="Profile" component={NotificationScreens} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}