import React, { useState } from 'react'
import { Box, Button, Heading, VStack } from 'native-base'
import Input from '../../components/forms/Input'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ProfileStackParamsList } from '../../navigators/ProfileNavigator'

type UpdatePasswordScreenProps = NativeStackScreenProps<ProfileStackParamsList, 'UpdatePassword'>

const UpdatePasswordScreen = ({ navigation }: UpdatePasswordScreenProps) => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('')

  const [updatingPassword, setUpdatingPassword] = useState(false)

  const handleUpdatePasswordPress = async () => {

  }

  return (
    <VStack p={4}>
      <Heading textAlign={"center"} mb={10}>Update password</Heading>
      <Box mb={4}>
        <Input placeholder="Current password" value={currentPassword} onChangeText={value => setCurrentPassword(value)} />
      </Box>

      <Box mb={4}>
        <Input placeholder="New password" value={newPassword} onChangeText={value => setNewPassword(value)} />
      </Box>

      <Box mb={4}>
        <Input placeholder="Confirm new password" value={newPasswordConfirmation} onChangeText={value => setNewPasswordConfirmation(value)} />
      </Box>

      <Box mb={4}>
        <Button onPress={handleUpdatePasswordPress} isLoading={updatingPassword} isLoadingText="Updating password">Update password</Button>
      </Box>
    </VStack>
  )
}

export default UpdatePasswordScreen
