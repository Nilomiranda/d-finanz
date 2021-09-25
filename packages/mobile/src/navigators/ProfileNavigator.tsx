import React, { Suspense } from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../profile/screens/ProfileScreen";
import UpdatePasswordScreen from "../profile/screens/UpdatePasswordScreen";
import {graphql, loadQuery, useRelayEnvironment} from "react-relay";
import {Text} from "react-native";

export type ProfileStackParamsList = {
  Profile: undefined,
  UpdatePassword: undefined
}

const Stack = createNativeStackNavigator<ProfileStackParamsList>();

const ProfileNavigator = () => {
  const environment = useRelayEnvironment()

  const loggedUserQuery = graphql`
    query ProfileNavigatorQuery {
      user {
        name
        email
        id
      }
    }
  `

  const queryReference = loadQuery(
    environment,
    loggedUserQuery,
    {},
    { fetchPolicy: 'store-or-network' }
  )

  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" options={{ headerShown: false }}>
        { props => (
          <Suspense fallback={<Text>Loading...</Text>}>
            <ProfileScreen queryDefinition={loggedUserQuery} queryRef={queryReference} navigation={props.navigation} route={props.route as any} />
          </Suspense>
        ) }
      </Stack.Screen>
      <Stack.Screen name="UpdatePassword" component={UpdatePasswordScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default ProfileNavigator
