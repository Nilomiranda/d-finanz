import React, {useState} from 'react'
import {Box, Button, Heading, VStack, useToast} from "native-base";
import Input from "../../components/forms/Input";
import {useMutation} from "urql";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {MainStackParamsList} from "../../navigators/MainNavigator";

const AccountConfirmationMutation = `
  mutation($code: String!, $email: String!) {
    createUser(input: { code: $code, email: $email }) {
      name
      email
    }
  }
`

type AccountConfirmationScreenProps = NativeStackScreenProps<MainStackParamsList, 'AccountConfirmation'>

const AccountConfirmationScreen = ({ route, navigation }: AccountConfirmationScreenProps) => {
  const [email, setEmail] = useState(route?.params?.email || '')
  const [code, setCode] = useState('')
  const [confirmingAccount, setConfirmingAccount] = useState(false)

  const toast = useToast()
  const [, confirmAccount] = useMutation(AccountConfirmationMutation)

  const handleAccountConfirmed = () => {
    navigation?.navigate('SignIn', { email })
  }

  const handleAccountConfirmation = async () => {
    try {
      setConfirmingAccount(true)
      await confirmAccount({
        code,
        email,
      })
      handleAccountConfirmed()
      toast.show({
        description: 'Account confirmed! You are now ready to log in.',
        status: 'info',
        isClosable: true,
        duration: 5000,
      })
    } catch (err) {
      toast.show({
        description: 'Error confirming your account. Please try again in few moments',
        status: 'error',
        isClosable: true,
        duration: 5000,
      })
    } finally {
      setConfirmingAccount(false)
    }
  }

  return (
    <VStack paddingX={3} justifyContent={"center"} height={"100%"}>
      <Heading textAlign={"center"} mb={10}>Confirm your account</Heading>

      <Box mb={5}>
        <Input label={"Email"} autoCapitalize="none" placeholder={"email@domain.com"} value={email} onChangeText={(value) => setEmail(value)} />
      </Box>

      <Box mb={5}>
        <Input label={"Code"} placeholder={"0000"} value={code} onChangeText={(value) => setCode(value)} />
      </Box>

      <Box mb={5}>
        <Button size={"lg"} onPress={handleAccountConfirmation} isLoading={confirmingAccount} isLoadingText={"Confirming account"}>Confirm account</Button>
      </Box>
    </VStack>
  )
}

export default AccountConfirmationScreen
