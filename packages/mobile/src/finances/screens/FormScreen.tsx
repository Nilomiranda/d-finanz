import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Box, Button, HStack, VStack, Text, useToast } from 'native-base'
import React, { useEffect, useState } from 'react'
import { NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native'
import Chip from '../../components/data/Chip'
import Input from '../../components/forms/Input'
import { FinancialRecordType } from '../../interfaces/financialRecord'
import { ExpensesStackParamsList } from '../../navigators/ExpensesNavigator'
import {useMutation} from "react-relay";
import CreateExpenseMutation from '../mutations/CreateExpense'

const financialRecordTypeToActionName: Record<string, string> = {
  [FinancialRecordType.EXPENSE]: 'expense',
  [FinancialRecordType.INCOME]: 'income'
}

type FormScreenProps = NativeStackScreenProps<ExpensesStackParamsList, 'Form'>

const FormScreen = ({ navigation, route }: FormScreenProps) => {
  const { params: { type } } = route

  const toast = useToast()

  const [amount, setAmount] = useState('')
  const [name, setName] = useState('')
  const [tag, setTag] = useState('')
  const [tags, setTags] = useState<string[]>([])

  const [createExpense, creatingExpense] = useMutation(CreateExpenseMutation)

  const handleSavePress = async () => {
    const parsedAmount = amount ? Number(amount.replace(',', '.')) : 0

    createExpense({
      variables: {
        amount: parsedAmount,
        type,
        tags,
        name
      },
      onCompleted() {
        toast.show({
          description: `Saved ${name} ${financialRecordTypeToActionName[type]}!`,
          status: 'success',
          isClosable: true,
          duration: 5000,
        })
        navigation?.goBack()
      },
      onError() {
        toast.show({
          description: `Error creating ${financialRecordTypeToActionName[type]}, please try again.`,
          status: 'error',
          isClosable: true,
          duration: 5000,
        })
      }
    })
  }

  const handleTagInputKeyPress = (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    const { key } = event?.nativeEvent

    if (key === ',') {
      const newTag = tag?.replace(',', '')?.toLowerCase()
      if (newTag && !tags?.includes(newTag)) {
        setTags([...tags, newTag])
      }
    }
  }

  const handleTagDelete = (tagToDelete: string) => {
    const tagsToRemain = tags?.filter(tag => tag !== tagToDelete)
    setTags(tagsToRemain)
  }

  useEffect(() => {
    setTag('')
  }, [tags])

  return (
    <VStack p={4}>
      <Box mb={4}>
        <Input type="number" label="Amount" placeholder="Amount" keyboardType="decimal-pad" value={amount} onChangeText={value => setAmount(value)} />
      </Box>

      <Box mb={4}>
        <Input type="text" label="Name" placeholder="Name" value={name} onChangeText={value => setName(value)} />
      </Box>

      <Box mb={4}>
        <Input type="text" label="Tags" placeholder="example, another, tag1" value={tag} onChangeText={value => setTag(value)} onKeyPress={handleTagInputKeyPress} />
      </Box>

      {
        tags?.length ?
        (
          <HStack my={8}>
            { tags?.map((tag, index) => (
              <Box key={index} mr={2}>
                <Chip text={tag} closable onClose={() => handleTagDelete(tag)} />
              </Box>
            )) }
          </HStack>
        ) : null
      }

      <Button isLoading={creatingExpense} isLoadingText="Saving" mb={4} onPress={handleSavePress}>Save</Button>
    </VStack>
  )
}

export default FormScreen
