import { View, Text,Button } from 'react-native';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/stack';

function HomeScreens({navigation}){
  return (
    <View style= {{flex: 1,
    alignItems: 'center', justifyContent:'center'}}>
      <Text>Home</Text>
    <Button
    title="Go to notification"
    onPress={() => navigation.navigate('Notification')}
  />
    </View>
  )
} 
  
export default HomeScreens;