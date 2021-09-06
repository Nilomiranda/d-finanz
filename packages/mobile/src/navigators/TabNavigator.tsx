import React from 'react'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddIncomeScreen from '../finances/screens/AddIncomeScreen';
import AddExpenseScreen from '../finances/screens/AddExpenseScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { NavigatorScreenParams, RouteProp } from '@react-navigation/core';
import ProfileNavigator, { ProfileStackParamsList } from './ProfileNavigator';

export type BottomTabParamsList = {
  AddIncome: undefined
  AddExpense: undefined
  ProfileNavigator: NavigatorScreenParams<ProfileStackParamsList>
}


const Tab = createBottomTabNavigator<BottomTabParamsList>()

const setTabBarScreenOptions = ({ route }: { route: RouteProp<BottomTabParamsList> }): BottomTabNavigationOptions => ({
  tabBarIcon: ({ focused }) => {
    const routeNameToIconName: Record<keyof BottomTabParamsList, string> = {
      AddIncome: 'attach-money',
      AddExpense: 'money-off',
      ProfileNavigator: 'person'
    }

    return <MaterialIcon name={routeNameToIconName[route?.name]} color={focused ? "black" : "lightgray"} size={30} />
  },
  tabBarActiveTintColor: 'black',
  tabBarInactiveTintColor: 'lightgray',
})

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={setTabBarScreenOptions}>
      <Tab.Screen name="AddIncome" component={AddIncomeScreen} options={{ title: 'Add Income' }} />
      <Tab.Screen name="AddExpense" component={AddExpenseScreen} options={{ title: 'Add Expense' }} />
      <Tab.Screen name="ProfileNavigator" component={ProfileNavigator} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  )
}

export default MainTabNavigator
