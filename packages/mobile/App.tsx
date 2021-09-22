import React, {useEffect, useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import MainNavigator from "./src/navigators/MainNavigator";
import {NativeBaseProvider} from 'native-base';
import { theme } from './src/styles/theme';
import { RelayEnvironmentProvider } from "react-relay/hooks"
import relayEnvironment from './src/config/relayEnvironment'

export default function App() {
  return (
      <RelayEnvironmentProvider environment={relayEnvironment}>
        <NavigationContainer>
          <NativeBaseProvider theme={theme}>
            <MainNavigator />
          </NativeBaseProvider>
        </NavigationContainer>
      </RelayEnvironmentProvider>
  );
}
