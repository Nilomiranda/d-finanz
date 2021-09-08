import { Text, Fab, VStack } from 'native-base'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import React from 'react'
import { useIsFocused } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ExpensesStackParamsList } from '../../navigators/ExpensesNavigator'
import { FinancialRecordType } from '../../interfaces/financialRecord'

type ExpensesScreenProps = NativeStackScreenProps<ExpensesStackParamsList, 'List'>

const ExpensesScreen = ({ navigation }: ExpensesScreenProps) => {
  const isFocused = useIsFocused()

  return (
    <VStack>
      <Text>Expenses screen</Text>

      {
        isFocused ?
        (
          <Fab
            size="sm"
            icon={<MaterialIcon name="add" size={24} />}
            mb={20}
            onPress={() => navigation?.navigate('Form', { type: FinancialRecordType.EXPENSE })}
          />
        ) : null
      }
    </VStack>
  )
}

export default ExpensesScreen
