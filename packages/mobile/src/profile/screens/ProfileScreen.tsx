import { Box, Button, Text, VStack } from 'native-base'
import React from 'react'
import { useQuery } from 'urql'
import ProfileMenu from '../components/ProfileMenu'

const CurrentUserQuery = `
  query CurrentUser {
    user {
      name
      email
    }
  }
`

const ProfileScreen = () => {
  const [currentUserQueryResult, refetchCurrentUser] = useQuery({
    query: CurrentUserQuery,
  })

  const { data, fetching, error } = currentUserQueryResult

  return (
    <VStack flex={1} p={4}>
      <Text fontSize={24} fontWeight="bold">{data?.user?.name}</Text>
      <Text fontSize={16} fontWeight="normal">{data?.user?.email}</Text>

      <Box mt={4}>
        <ProfileMenu />
      </Box>

      <Button mt="auto">Sign out</Button>
    </VStack>
  )
}

export default ProfileScreen
