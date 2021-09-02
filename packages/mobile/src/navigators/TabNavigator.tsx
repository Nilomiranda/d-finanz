import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddIncomeScreen from '../finances/screens/AddIncomeScreen';
import AddExpenseScreen from '../finances/screens/AddExpenseScreen';

export type BottomTabParamsList = {
  AddIncome: undefined
  AddExpense: undefined
}


const Tab = createBottomTabNavigator<BottomTabParamsList>()

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AddIncome" component={AddIncomeScreen} />
      <Tab.Screen name="AddExpense" component={AddExpenseScreen} />
    </Tab.Navigator>
  )
}

export default MainTabNavigator
