import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddIncomeScreen from '../finances/screens/AddIncomeScreen';
import { FinancialRecordType } from '../interfaces/financialRecord';
import FormScreen from '../finances/screens/FormScreen';

export type IncomeStackParamsList = {
  List: undefined
  Form: {
    type: FinancialRecordType
  }
}


const Stack = createNativeStackNavigator<IncomeStackParamsList>();

const IncomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="List" component={AddIncomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Form" component={FormScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default IncomeNavigator
