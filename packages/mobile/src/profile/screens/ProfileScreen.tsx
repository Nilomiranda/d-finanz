import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Box, Button, Text, VStack, useToast } from 'native-base'
import React, { useState } from 'react'
import { useMutation, useQuery } from 'urql'
import ConfirmationDialog from '../../components/overlay/ConfirmationDialog'
import { MainStackParamsList } from '../../navigators/MainNavigator'
import ProfileMenu from '../components/ProfileMenu'

const CurrentUserQuery = `
  query CurrentUser {
    user {
      name
      email
      id
    }
  }
`

const DeleteAccountMutation = `
  mutation ($id: String!) {
    deleteAccount(id: $id) {
      name
      email
    }
  }
`

type ProfileScreenProps = NativeStackScreenProps<MainStackParamsList, 'Home'>

const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
  const toast = useToast()
  const [accountDeletionConfirmationDialogIsOpen, setAccountDeletionConfirmationDialogIsOpen] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const [currentUserQueryResult] = useQuery({
    query: CurrentUserQuery,
  })

  const [, deleteAccount] = useMutation(DeleteAccountMutation)

  const { data } = currentUserQueryResult

  const handleAccountDeletionConfirmed = async () => {
    setAccountDeletionConfirmationDialogIsOpen(false)
    setDeleting(true)
    deleteAccount({
      id: data?.user?.id,
    }).then(() => {
      toast.show({
        status: 'success',
        description: 'Account succesfully deleted.',
        duration: 5000,
        isClosable: true
      })
      navigation?.navigate('SignIn')
    }).finally(() => {
      setDeleting(false)
    })
  }

  return (
    <VStack flex={1} p={4}>
      <Text fontSize={24} fontWeight="bold">{data?.user?.name}</Text>
      <Text fontSize={16} fontWeight="normal">{data?.user?.email}</Text>
      <Button mt={4} colorScheme="red" variant="outline" isLoading={deleting} isLoadingText="Deleting account" onPress={() => setAccountDeletionConfirmationDialogIsOpen(true)} size="sm">Delete account</Button>

      <Box mt={4}>
        <ProfileMenu />
      </Box>

      <Button mt="auto">Sign out</Button>

      <ConfirmationDialog
        isOpen={accountDeletionConfirmationDialogIsOpen}
        confirmationButtonAction={handleAccountDeletionConfirmed}
        cancelButtonAction={() => setAccountDeletionConfirmationDialogIsOpen(false)}
        message="Are you sure you want to delete your account?"
        onClose={() => setAccountDeletionConfirmationDialogIsOpen(false)}
      />
    </VStack>
  )
}

export default ProfileScreen
