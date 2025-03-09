import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='BottomTabNavigator' >
        {/* <Stack.Screen name="(Tab)navigator" component={BottomTabNavigator} /> */}
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
        <Stack.Screen name="payment" component={Payment} />
        <Stack.Screen name="MessageScreen" component={MessageScreen} />
        <Stack.Screen name="MessageScreen1" component={MessageScreen1} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="ThankyouScreen" component={ThankyouScreen} />




      </Stack.Navigator>
    </NavigationContainer>
  );
}
