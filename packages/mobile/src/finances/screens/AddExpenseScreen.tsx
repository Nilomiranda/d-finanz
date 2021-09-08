import { Text, Fab, VStack } from 'native-base'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ExpensesStackParamsList } from '../../navigators/ExpensesNavigator'
import { FinancialRecordType } from '../../interfaces/financialRecord'

type ExpensesScreenProps = NativeStackScreenProps<ExpensesStackParamsList, 'List'>

const ExpensesScreen = ({ navigation }: ExpensesScreenProps) => {
  return (
    <VStack>
      <Text>Expenses screen</Text>

      <Fab
        placement="bottom-right"
        size="sm"
        icon={<MaterialIcon name="add" size={24} />}
        mb={20}
        onPress={() => navigation?.navigate('Form', { type: FinancialRecordType.EXPENSE })}
      />
    </VStack>
  )
}

export default ExpensesScreen
