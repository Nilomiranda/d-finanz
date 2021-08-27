import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import MainNavigator from "./src/navigators/MainNavigator";
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
