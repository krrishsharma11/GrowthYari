import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import Home from '../HomeScreens/Home';
import YariConnect from '../HomeScreens/YariConnect';
import Mentorship from '../HomeScreens/Mentorship';
import Profile from '../HomeScreens/Profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'YariConnect') {
            iconName = 'chatbubbles';

          } else if (route.name === 'Profile') {
            iconName = 'person'
          }
          else if (route.name === 'MentorShip') {
            iconName = 'people'
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#9664FF',
        tabBarInactiveTintColor: '#7D7F88',
        tabBarStyle: {
          height: "7%", // You can also adjust the height if needed
        },
      })}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="YariConnect" component={YariConnect} options={{ headerShown: false }} />
      <Tab.Screen name="MentorShip" component={Mentorship} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
     

    </Tab.Navigator>
  );
};


export default BottomTabNavigator;
