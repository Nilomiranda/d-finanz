import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from "../auth/screens/SignInScreen";
import SignUpScreen from "../auth/screens/SignUpScreen";
import AccountConfirmationScreen from "../auth/screens/AccountConfirmationScreen";
import Home from "../auth/screens/Home";

export type MainStackParamsList = {
  SignIn: { email: string } | undefined;
  SignUp: undefined;
  AccountConfirmation: { email: string } | undefined;
  Home: undefined
}

const Stack = createNativeStackNavigator<MainStackParamsList>();

function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="AccountConfirmation" component={AccountConfirmationScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default MainNavigator
