import React, { useState } from 'react'
import { Box, Button, Heading, VStack, useToast } from 'native-base'
import Input from '../../components/forms/Input'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ProfileStackParamsList } from '../../navigators/ProfileNavigator'
import { useMutation } from 'urql'

const UpdatePasswordMutation = `
mutation ($currentPassword: String!, $newPassword: String!) {
  updatePassword (input: {
    currentPassword: $currentPassword,
    newPassword: $newPassword,
  }) {
    email
  }
}
`

type UpdatePasswordScreenProps = NativeStackScreenProps<ProfileStackParamsList, 'UpdatePassword'>

const UpdatePasswordScreen = ({ navigation }: UpdatePasswordScreenProps) => {
  const toast = useToast()

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('')

  const [updatingPassword, setUpdatingPassword] = useState(false)

  const [, updatePassword] = useMutation(UpdatePasswordMutation)

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

    try {
      setUpdatingPassword(true)
      const results = await updatePassword({ currentPassword, newPassword })

      if (results?.error) {
        toast.show({
          status: 'error',
          description: 'Error updating your password. Check if your current password is correct.',
          duration: 7000,
        })

        return
      }

      toast.show({
        status: 'success',
        description: 'Password updated',
        duration: 5000,
      })

      navigation?.navigate('Profile')
    } catch (err) {
      toast.show({
        status: 'error',
        description: 'An unexpected error occurred while updating your password. Please try again',
        duration: 7000,
      })
    } finally {
      setUpdatingPassword(false)
    }
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
