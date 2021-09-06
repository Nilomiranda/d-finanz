import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { VStack } from 'native-base'
import React from 'react'
import { MainStackParamsList } from '../../navigators/MainNavigator'
import { ProfileStackParamsList } from '../../navigators/ProfileNavigator'
import { BottomTabParamsList } from '../../navigators/TabNavigator'
import ProfileMenuOption from './ProfileMenuOption'

interface ProfileMenuProps {
  navigation: NativeStackNavigationProp<BottomTabParamsList, 'ProfileNavigator'>
}

const ProfileMenu = ({ navigation }: ProfileMenuProps) => {
  return (
    <VStack>
      {/* <ProfileMenuOption iconName="person" label="Edit profile" description="Name and other preferences" onPress={() => null} /> */}
      <ProfileMenuOption iconName="vpn-key" label="Update password" onPress={() => navigation?.navigate('ProfileNavigator', { screen: 'UpdatePassword' })} />
    </VStack>
  )
}

export default ProfileMenu
