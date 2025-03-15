import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';

import FirstScreen from './Screens/FirstScreen';
import SecondScreen from './Screens/SecondScreen';
import ThirdScreen from './Screens/ThirdScreen';
import LoginScreen from './Screens/LoginScreen';
import LogIn1Screen from './Screens/LogIn1Screen';
import SignUpScreen from './Screens/SignUpScreen';
import OtpScreen from './Screens/OtpScreen';
import VerifyOtp from './Screens/VerifyOtp';
import EmailOtp from './Screens/EmailOtp';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import MessageScreen from './Message/MessageScreen';
import MessageScreen1 from './Message/MessageScreen1';
import PaymentScreen from './Payment/PaymentScreen';
import ThankyouScreen from './Payment/ThankyouScreen';
import Payment from './src/HomeScreens/Payment';
import InterestsScreen from './Screens/Interest';
import NotificationScreen from './Screens/Notification';
import EventScreen from './Events/EventScreen';
import EventDetails from './Events/EventDetails';
import EventScreen1 from './Events/EventScreen1';
import EventScreen2 from './Events/EventScreen2';
import EventScreen3 from './Events/EventScreen3';
import ThanksScreen from './Events/ThanksScreen';
import ProgramScreen from './Events/ProgramScreen';
import EditProfile from './src/ProfileDetail/EditProfile';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const value = await AsyncStorage.getItem('login');
        setUser(value);
      } catch (error) {
        console.error('Error checking login status:', error);
      } finally {
        setLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={user ? "BottomTabNavigator" : "FirstScreen"}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="LogIn1Screen" component={LogIn1Screen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
        <Stack.Screen name="EmailOtp" component={EmailOtp} />
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        <Stack.Screen name="notification" component={NotificationScreen} />
        <Stack.Screen name="interest" component={InterestsScreen} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="MessageScreen" component={MessageScreen} />
        <Stack.Screen name="MessageScreen1" component={MessageScreen1} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="ThankyouScreen" component={ThankyouScreen} />
        <Stack.Screen name="EventScreen" component={EventScreen} />
        <Stack.Screen name="EventDetails" component={EventDetails} />
        <Stack.Screen name="EventScreen1" component={EventScreen1} />
        <Stack.Screen name="EventScreen2" component={EventScreen2} />
        <Stack.Screen name="EventScreen3" component={EventScreen3} />
        <Stack.Screen name="ThanksScreen" component={ThanksScreen} />
        <Stack.Screen name="ProgramScreen" component={ProgramScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
