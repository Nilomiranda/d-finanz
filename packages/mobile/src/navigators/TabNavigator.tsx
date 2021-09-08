import React from 'react'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { NavigatorScreenParams, RouteProp } from '@react-navigation/core';
import ProfileNavigator, { ProfileStackParamsList } from './ProfileNavigator';
import IncomeNavigator, { IncomeStackParamsList } from './IncomeNavigator';
import ExpensesNavigator, { ExpensesStackParamsList } from './ExpensesNavigator';

export type BottomTabParamsList = {
  IncomeNavigator: NavigatorScreenParams<IncomeStackParamsList>
  ExpenseNavigator: NavigatorScreenParams<ExpensesStackParamsList>
  ProfileNavigator: NavigatorScreenParams<ProfileStackParamsList>
}


const Tab = createBottomTabNavigator<BottomTabParamsList>()

const setTabBarScreenOptions = ({ route }: { route: RouteProp<BottomTabParamsList> }): BottomTabNavigationOptions => ({
  tabBarIcon: ({ focused }) => {
    const routeNameToIconName: Record<keyof BottomTabParamsList, string> = {
      IncomeNavigator: 'attach-money',
      ExpenseNavigator: 'money-off',
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
      <Tab.Screen name="IncomeNavigator" component={IncomeNavigator} options={{ title: 'Income' }} />
      <Tab.Screen name="ExpenseNavigator" component={ExpensesNavigator} options={{ title: 'Expense' }} />
      <Tab.Screen name="ProfileNavigator" component={ProfileNavigator} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  )
}

export default MainTabNavigator
