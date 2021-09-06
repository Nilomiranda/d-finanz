import React, {useEffect, useState} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from "../auth/screens/SignInScreen";
import SignUpScreen from "../auth/screens/SignUpScreen";
import AccountConfirmationScreen from "../auth/screens/AccountConfirmationScreen";
import TabNavigator, { BottomTabParamsList } from "./TabNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useQuery} from "urql";
import LoadingScreen from '../auth/screens/LoadingScreen';
import RecoverAccountScreen from '../auth/screens/RecoverAccountScreen';
import { NavigatorScreenParams } from '@react-navigation/core';

export type MainStackParamsList = {
  SignIn: { email: string } | undefined;
  SignUp: undefined;
  AccountConfirmation: { email: string } | undefined;
  AccountRecovery: { email: string } | undefined;
  Home: NavigatorScreenParams<BottomTabParamsList>
  Loading: undefined
}

const CurrentUserQuery = `
  query CurrentUser {
    user {
      name
      email
    }
  }
`

const Stack = createNativeStackNavigator<MainStackParamsList>();

const MainNavigator = () => {
  const [token, setToken] = useState('')

  const [currentUserQueryResult, refetchCurrentUser] = useQuery({
    query: CurrentUserQuery,
  })

  const { data, fetching, error } = currentUserQueryResult

  useEffect(() => {
    refetchCurrentUser({ requestPolicy: 'network-only' })
  }, [token])

  useEffect(() => {
    async function getToken() {
      setToken((await AsyncStorage.getItem('FINANZ_JWT_TOKEN')) || '')
    }

    getToken()
  }, [])

  if (fetching) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }

  return (
    <Stack.Navigator initialRouteName={data?.user?.email ? "Home" : "SignIn"}>
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AccountConfirmation" component={AccountConfirmationScreen} />
      <Stack.Screen name="AccountRecovery" component={RecoverAccountScreen} />
      <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default MainNavigator
