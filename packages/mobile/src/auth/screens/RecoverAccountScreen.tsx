import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Box, Button, Heading, VStack, useToast } from 'native-base'
import React, { useState } from 'react'
import { useMutation } from 'urql'
import Input from '../../components/forms/Input'
import { MainStackParamsList } from '../../navigators/MainNavigator'

const RequestAccountRecoveryMutation = `
  mutation($email: String!) {
    requestRecoveryCode(email: $email)
  }
`

const ResetPasswordMutation = `
  mutation ($email: String!, $code: String!, $newPassword: String!) {
    recoverAccount(input: {
      email: $email,
      code: $code,
      newPassword: $newPassword
    }) {
      email
    }
  }
`

type RecoverAccountScreenProps = NativeStackScreenProps<MainStackParamsList, 'AccountRecovery'>

const RecoverAccountScreen = ({ navigation }: RecoverAccountScreenProps) => {
  // states: ask code > send new password
  const toast = useToast()

  const [, requestAccountRecoveryCode] = useMutation(RequestAccountRecoveryMutation)
  const [, resetPassword] = useMutation(ResetPasswordMutation)

  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('')

  const [requesting, setRequesting] = useState(false)
  const [codeRequested, setCodeRequested] = useState(false)

  const handleRequestRecoverPress = async () => {
    try {
      setRequesting(true)
      const results = await requestAccountRecoveryCode({ email })
      if (results?.error) {
        toast.show({
          status: 'error',
          description: 'An unexpected error occured while requesting your account recovery code. Please try again.',
          duration: 5000,
          isClosable: true,
        })

        return
      }

      setCodeRequested(true)
      toast.show({
        status: 'info',
        description: 'Check your email for a recovery code',
        duration: 5000,
        isClosable: true,
      })
    } catch (err) {
      toast.show({
        status: 'error',
        description: 'An unexpected error occured while requesting your account recovery code. Please try again.',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setRequesting(false)
    }
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

    try {
      setRequesting(true)
      const results = await resetPassword({ email, code, newPassword })

      if (results?.error) {
        toast.show({
          status: 'error',
          description: 'An unexpected error occured while requesting your account recovery code. Please try again.',
          duration: 5000,
          isClosable: true,
        })

        return
      }

      toast.show({
        status: 'info',
        description: 'Password successfully set. You may login now',
        duration: 5000,
        isClosable: true,
      })
      navigation?.navigate('SignIn')
    } catch (err) {
      toast.show({
        status: 'error',
        description: 'An unexpected error occured while requesting your account recovery code. Please try again.',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setRequesting(false)
    }
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
            <Button size={"lg"} onPress={handleRequestRecoverPress} isLoading={requesting}>Request recovery code</Button>
          </Box>
        ) :
        (
          <Box mb={5}>
            <Button size={"lg"} mt={4} onPress={handleResetPasswordPress} isLoading={requesting}>Reset password</Button>
          </Box>
        )
      }
    </VStack>
  )
}

export default RecoverAccountScreen
