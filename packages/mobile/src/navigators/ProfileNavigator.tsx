import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../profile/screens/ProfileScreen";
import UpdatePasswordScreen from "../profile/screens/UpdatePasswordScreen";

export type ProfileStackParamsList = {
  Profile: undefined
  UpdatePassword: undefined
}


const Stack = createNativeStackNavigator<ProfileStackParamsList>();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="UpdatePassword" component={UpdatePasswordScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default ProfileNavigator
