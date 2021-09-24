import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Box, Button, Heading, VStack, useToast } from 'native-base'
import React, { useState } from 'react'
import Input from '../../components/forms/Input'
import { MainStackParamsList } from '../../navigators/MainNavigator'
import RequestAccountRecoveryMutation from '../mutations/RequestAccountRecovery'
import ResetPasswordMutation from '../mutations/ResetPassword'
import {useMutation} from "react-relay";

type RecoverAccountScreenProps = NativeStackScreenProps<MainStackParamsList, 'AccountRecovery'>

const RecoverAccountScreen = ({ navigation }: RecoverAccountScreenProps) => {
  // states: ask code > send new password
  const toast = useToast()

  const [requestAccountRecoveryCode, requestingAccountRecoveryCode] = useMutation(RequestAccountRecoveryMutation)
  const [resetPassword, resettingPassword] = useMutation(ResetPasswordMutation)

  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('')

  const [codeRequested, setCodeRequested] = useState(false)

  const handleRequestRecoverPress = async () => {
    requestAccountRecoveryCode({
      variables: { email },
      onCompleted() {
        toast.show({
          status: 'info',
          description: 'Check your email for a recovery code',
          duration: 5000,
          isClosable: true,
        })
        setCodeRequested(true)
      },
      onError() {
        toast.show({
          status: 'error',
          description: 'An unexpected error occurred while requesting your account recovery code. Please try again.',
          duration: 5000,
          isClosable: true,
        })
      }
    })
  }

  const isFormValid = (): boolean => {
    if (!newPassword || !newPasswordConfirmation || (newPasswordConfirmation !== newPassword)) {
      toast.show({
        status: 'error',
        description: 'Passwords not matching',
        duration: 5000,
      })

      return false
    }

    return true
  }

  const handleResetPasswordPress = async () => {
    if (!isFormValid()) {
      return
    }

    resetPassword({
      variables: { email, code, newPassword },
      onCompleted() {
        toast.show({
          status: 'info',
          description: 'Password successfully set. You may login now',
          duration: 5000,
          isClosable: true,
        })
        navigation?.navigate('SignIn')
      },
      onError() {
        toast.show({
          status: 'error',
          description: 'An unexpected error occurred while requesting your account recovery code. Please try again.',
          duration: 5000,
          isClosable: true,
        })
      }
    })
  }

  return (
    <VStack paddingX={3} justifyContent={"center"} height={"100%"}>
      <Heading textAlign={"center"} mb={10}>Reset your password</Heading>

      <Box mb={5}>
        <Input label={"Email"} autoCapitalize="none" type="email" placeholder={"email@domain.com"} value={email} onChangeText={(value) => setEmail(value)} />
      </Box>

      {
        codeRequested ?
        (
          <>
            <Box mb={5}>
              <Input label={"Code"} placeholder={"0000"} value={code} onChangeText={(value) => setCode(value)} />
            </Box>

            <Box mb={5}>
              <Input label={"New password"} type="password" value={newPassword} onChangeText={(value) => setNewPassword(value)} />
            </Box>

            <Box mb={5}>
              <Input label={"New password confirmation"} type="password" value={newPasswordConfirmation} onChangeText={(value) => setNewPasswordConfirmation(value)} />
            </Box>
          </>
        ) : null
      }

      { !codeRequested ?
        (
          <Box mb={5}>
            <Button size={"lg"} onPress={handleRequestRecoverPress} isLoading={requestingAccountRecoveryCode || resettingPassword}>Request recovery code</Button>
          </Box>
        ) :
        (
          <Box mb={5}>
            <Button size={"lg"} mt={4} onPress={handleResetPasswordPress} isLoading={requestingAccountRecoveryCode || resettingPassword}>Reset password</Button>
          </Box>
        )
      }
    </VStack>
  )
}

export default RecoverAccountScreen
