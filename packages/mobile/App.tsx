import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import MainNavigator from "./src/navigators/MainNavigator";
import {NativeBaseProvider} from 'native-base';
import { theme } from './src/styles/theme';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <MainNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
