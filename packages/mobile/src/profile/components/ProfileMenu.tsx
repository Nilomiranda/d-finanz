import { VStack } from 'native-base'
import React from 'react'
import ProfileMenuOption from './ProfileMenuOption'

interface ProfileMenuProps {
  children: React.ReactNode
}

const ProfileMenu = () => {
  return (
    <VStack>
      <ProfileMenuOption iconName="person" label="Edit profile" description="Name and other preferences" onPress={() => null} />
      <ProfileMenuOption iconName="vpn-key" label="Update password" onPress={() => null} />
    </VStack>
  )
}

export default ProfileMenu
