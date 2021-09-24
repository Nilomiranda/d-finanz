import React, {useState} from 'react'
import {Box, Button, Heading, VStack, useToast} from "native-base";
import Input from "../../components/forms/Input";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {MainStackParamsList} from "../../navigators/MainNavigator";
import AccountConfirmationMutation from '../mutations/AccountConfirmation'
import ResendAccountConfirmationMutation from "../mutations/ResendAccountConfirmation";
import {useMutation} from "react-relay";

type AccountConfirmationScreenProps = NativeStackScreenProps<MainStackParamsList, 'AccountConfirmation'>

const AccountConfirmationScreen = ({ route, navigation }: AccountConfirmationScreenProps) => {
  const [email, setEmail] = useState(route?.params?.email || '')
  const [code, setCode] = useState('')

  const toast = useToast()
  const [confirmAccount, confirmingAccount] = useMutation(AccountConfirmationMutation)
  const [resendConfirmationCode, resendingConfirmationCode] = useMutation(ResendAccountConfirmationMutation)

  const handleAccountConfirmed = () => {
    navigation?.navigate('SignIn', { email })
  }

  const handleAccountConfirmation = async () => {
    confirmAccount({
      variables: {
        code,
        email,
      },
      onCompleted() {
        handleAccountConfirmed()
        toast.show({
          description: 'Account confirmed! You are now ready to log in.',
          status: 'info',
          isClosable: true,
          duration: 5000,
        })
      },
      onError() {
        toast.show({
          description: 'Error confirming your account. Please try again in few moments',
          status: 'error',
          isClosable: true,
          duration: 5000,
        })
      }
    })
  }

  const handleResendCodePress = async () => {
    resendConfirmationCode({
      variables: { email },
      onCompleted() {
        toast.show({
          description: `Code sent to ${email}`,
          status: 'info',
          isClosable: true,
          duration: 5000,
        })
      }
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
        <Button size="sm" onPress={handleResendCodePress} isLoading={resendingConfirmationCode} isLoadingText="Resending code" variant="link" colorScheme="primary">Resend code</Button>
      </Box>

      <Box mb={5}>
        <Button size={"lg"} onPress={handleAccountConfirmation} isLoading={confirmingAccount} isLoadingText={"Confirming account"}>Confirm account</Button>
      </Box>
    </VStack>
  )
}

export default AccountConfirmationScreen
