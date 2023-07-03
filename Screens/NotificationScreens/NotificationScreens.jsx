import { View, Text,Button } from 'react-native';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/stack';

function NotificationScreens({navigation}){
  return (
    <View style= {{flex: 1,
    alignItems: 'center', justifyContent:'center'}}>
        <Text>Profile</Text>
    <Button
    title="Go to Profile"
    onPress={() => navigation.navigate('Home')}
  />
    </View>
  )
} 
  


export default NotificationScreens;