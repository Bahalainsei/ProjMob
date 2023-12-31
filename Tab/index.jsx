import { View, Text } from 'react-native'
import React from 'react'

const index = () => {
    return (
        <Tab.Navigator
          initialRouteName="Feed"
          activeColor="#e91e63"
          barStyle={{ backgroundColor: 'tomato' }}
        >
          <Tab.Screen
            name="Feed"
            component={Feed}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={Notifications}
            options={{
              tabBarLabel: 'Updates',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      );
}

export default index