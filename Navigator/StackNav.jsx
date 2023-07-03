import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreens from '../Screens/Home/HomeScreens';
import NotificationScreens from '../Screens/NotificationScreens/NotificationScreens';

const Stack = createStackNavigator();

function StackNave() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreens} />
      <Stack.Screen name="Notification" component={NotificationScreens} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNave;