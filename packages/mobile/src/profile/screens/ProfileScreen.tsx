import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Box, Button, Text, VStack, useToast } from 'native-base'
import React, { useState } from 'react'
import { useQuery } from 'urql'
import AsyncStorage from "@react-native-async-storage/async-storage";
import ConfirmationDialog from '../../components/overlay/ConfirmationDialog'
import ProfileMenu from '../components/ProfileMenu'
import { FINANZ_JWT_TOKEN } from '../../constants/asyncStorage';
import { BottomTabParamsList } from '../../navigators/TabNavigator';
import DeleteAccountMutation from '../mutations/DeleteAccount'
import {useMutation} from "react-relay";

const CurrentUserQuery = `
  query CurrentUser {
    user {
      name
      email
      id
    }
  }
`

type ProfileScreenProps = NativeStackScreenProps<BottomTabParamsList, 'ProfileNavigator'>

const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
  const toast = useToast()
  const [accountDeletionConfirmationDialogIsOpen, setAccountDeletionConfirmationDialogIsOpen] = useState(false)

  const [currentUserQueryResult] = useQuery({
    query: CurrentUserQuery,
  })

  const [deleteAccount, deletingAccount] = useMutation(DeleteAccountMutation)

  const { data } = currentUserQueryResult

  const handleAccountDeletionConfirmed = async () => {
    setAccountDeletionConfirmationDialogIsOpen(false)

    deleteAccount({
      variables: { id: data?.user?.id },
      onCompleted() {
        toast.show({
          status: 'success',
          description: 'Account successfully deleted.',
          duration: 5000,
          isClosable: true
        })
        AsyncStorage?.removeItem(FINANZ_JWT_TOKEN)
        navigation?.pop()
      }
    })
  }

  const handleSignOutPress = () => {
    AsyncStorage?.removeItem(FINANZ_JWT_TOKEN)
    navigation?.pop()
  }

  return (
    <VStack flex={1} p={4}>
      <Text fontSize={24} fontWeight="bold">{data?.user?.name}</Text>
      <Text fontSize={16} fontWeight="normal">{data?.user?.email}</Text>
      <Button mt={4} colorScheme="red" variant="outline" isLoading={deletingAccount} isLoadingText="Deleting account" onPress={() => setAccountDeletionConfirmationDialogIsOpen(true)} size="sm">Delete account</Button>

      <Box mt={4}>
        <ProfileMenu navigation={navigation} />
      </Box>

      <Button mt="auto" onPress={handleSignOutPress}>Sign out</Button>

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
