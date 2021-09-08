import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddExpenseScreen from '../finances/screens/AddExpenseScreen';
import { FinancialRecordType } from '../interfaces/financialRecord';
import FormScreen from '../finances/screens/FormScreen';

export type ExpensesStackParamsList = {
  List: undefined
  Form: {
    type: FinancialRecordType
  }
}


const Stack = createNativeStackNavigator<ExpensesStackParamsList>();

const ExpensesNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="List" component={AddExpenseScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Form" component={FormScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default ExpensesNavigator
