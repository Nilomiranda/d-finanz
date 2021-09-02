import React from 'react'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddIncomeScreen from '../finances/screens/AddIncomeScreen';
import AddExpenseScreen from '../finances/screens/AddExpenseScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { RouteProp } from '@react-navigation/core';
import ProfileScreen from '../profile/screens/ProfileScreen';

export type BottomTabParamsList = {
  AddIncome: undefined
  AddExpense: undefined
  Profile: undefined
}


const Tab = createBottomTabNavigator<BottomTabParamsList>()

const setTabBarScreenOptions = ({ route }: { route: RouteProp<BottomTabParamsList> }): BottomTabNavigationOptions => ({
  tabBarIcon: ({ focused }) => {
    const routeNameToIconName: Record<string, string> = {
      AddIncome: 'attach-money',
      AddExpense: 'money-off',
      Profile: 'person'
    }

    return <MaterialIcon name={routeNameToIconName[route?.name]} color={focused ? "black" : "lightgray"} size={30} />
  },
  tabBarActiveTintColor: 'black',
  tabBarInactiveTintColor: 'lightgray',
})

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={setTabBarScreenOptions}>
      <Tab.Screen name="AddIncome" component={AddIncomeScreen} />
      <Tab.Screen name="AddExpense" component={AddExpenseScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default MainTabNavigator
