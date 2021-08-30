import React, {useEffect, useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import MainNavigator from "./src/navigators/MainNavigator";
import {NativeBaseProvider} from 'native-base';
import { theme } from './src/styles/theme';
import {Provider} from "urql";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createGraphqlClient} from "./src/config/graphqlClient";

export default function App() {
  const [token, setToken] = useState<string | null | undefined>()

  useEffect(() => {
    async function getToken() {
      setToken(await AsyncStorage.getItem("FINANZ_JWT_TOKEN"))
    }

    getToken()
  }, [])

  return (
    <Provider value={createGraphqlClient(token)}>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <MainNavigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}
