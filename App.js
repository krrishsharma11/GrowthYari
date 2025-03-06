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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="LogIn1Screen" component={LogIn1Screen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
        <Stack.Screen name="EmailOtp" component={EmailOtp} />
        
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
