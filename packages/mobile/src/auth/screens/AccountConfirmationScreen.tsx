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

const ResendAccountConfirmationMutation = `
  mutation($email: String!) {
    resendConfirmationCode(email: $email)
  }
`

type AccountConfirmationScreenProps = NativeStackScreenProps<MainStackParamsList, 'AccountConfirmation'>

const AccountConfirmationScreen = ({ route, navigation }: AccountConfirmationScreenProps) => {
  const [email, setEmail] = useState(route?.params?.email || '')
  const [code, setCode] = useState('')
  const [confirmingAccount, setConfirmingAccount] = useState(false)
  const [resendingCode, setResendingCode] = useState(false)

  const toast = useToast()
  const [, confirmAccount] = useMutation(AccountConfirmationMutation)
  const [, resendConfirmationCode] = useMutation(ResendAccountConfirmationMutation)

  const handleAccountConfirmed = () => {
    navigation?.navigate('SignIn', { email })
  }

  const handleAccountConfirmation = async () => {
    try {
      setConfirmingAccount(true)
      const results = await confirmAccount({
        code,
        email,
      })

      if (results?.error) {
        toast.show({
          description: 'Error confirming your account. Please try again in few moments',
          status: 'error',
          isClosable: true,
          duration: 5000,
        })

        return
      }

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

  const handleResendCodePress = async () => {
    setResendingCode(true)
    resendConfirmationCode({ email })?.finally(() => {
      setResendingCode(false)
    })
  }

  return (
    <VStack paddingX={3} justifyContent={"center"} height={"100%"}>
      <Heading textAlign={"center"} mb={10}>Confirm your account</Heading>

      <Box mb={5}>
        <Input label={"Email"} autoCapitalize="none" placeholder={"email@domain.com"} value={email} onChangeText={(value) => setEmail(value)} />
      </Box>

      <Box mb={1}>
        <Input label={"Code"} placeholder={"0000"} value={code} onChangeText={(value) => setCode(value)} />
      </Box>

      <Box mb={5} ml="auto">
        <Button size="sm" onPress={handleResendCodePress} isLoading={resendingCode} isLoadingText="Resending code" variant="link" colorScheme="primary">Resend code</Button>
      </Box>

      <Box mb={5}>
        <Button size={"lg"} onPress={handleAccountConfirmation} isLoading={confirmingAccount} isLoadingText={"Confirming account"}>Confirm account</Button>
      </Box>
    </VStack>
  )
}

export default AccountConfirmationScreen
