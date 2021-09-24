import React, { useState } from 'react'
import { Box, Button, Heading, VStack, useToast } from 'native-base'
import Input from '../../components/forms/Input'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ProfileStackParamsList } from '../../navigators/ProfileNavigator'
import {graphql, useMutation} from "react-relay";

type UpdatePasswordScreenProps = NativeStackScreenProps<ProfileStackParamsList, 'UpdatePassword'>

const UpdatePasswordScreen = ({ navigation }: UpdatePasswordScreenProps) => {
  const UpdatePasswordMutation = graphql`
    mutation UpdatePasswordScreenMutation ($currentPassword: String!, $newPassword: String!) {
      updatePassword (input: {
        currentPassword: $currentPassword,
        newPassword: $newPassword,
      }) {
        email
      }
    }
  `

  const toast = useToast()

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('')

  const [updatePassword, updatingPassword] = useMutation(UpdatePasswordMutation)

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

  const handleUpdatePasswordPress = async () => {
    if (!isFormValid()) {
      return
    }

    updatePassword({
      variables: { currentPassword, newPassword },
      onCompleted() {
        toast.show({
          status: 'success',
          description: 'Password updated',
          duration: 5000,
        })

        navigation?.navigate('Profile')
      },
      onError() {
        toast.show({
          status: 'error',
          description: 'An unexpected error occurred while updating your password. Please try again',
          duration: 7000,
        })
      }
    })
  }

  return (
    <VStack p={4}>
      <Heading textAlign={"center"} mb={10}>Update password</Heading>
      <Box mb={4}>
        <Input type="password" placeholder="Current password" value={currentPassword} onChangeText={value => setCurrentPassword(value)} />
      </Box>

      <Box mb={4}>
        <Input type="password" placeholder="New password" value={newPassword} onChangeText={value => setNewPassword(value)} />
      </Box>

      <Box mb={4}>
        <Input type="password"  placeholder="Confirm new password" value={newPasswordConfirmation} onChangeText={value => setNewPasswordConfirmation(value)} />
      </Box>

      <Box mb={4}>
        <Button onPress={handleUpdatePasswordPress} isLoading={updatingPassword} isLoadingText="Updating password">Update password</Button>
      </Box>
    </VStack>
  )
}

export default UpdatePasswordScreen
