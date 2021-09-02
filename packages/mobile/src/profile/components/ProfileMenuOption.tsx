import { Box, HStack, Text, VStack } from 'native-base'
import React from 'react'
import { Pressable, TouchableOpacity } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

interface ProfileMenuOptionProps {
  label: string;
  onPress: () => void;

  description?: string;
  // material icon name
  iconName?: string;
}

const ProfileMenuOption = ({label, onPress, description = '', iconName = ''}: ProfileMenuOptionProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <VStack py={4} borderColor="gray.600" borderBottomWidth={1}>
        <HStack alignItems="center">
          {iconName ?
           (
             <Box mr={2}>
               <MaterialIcon name={iconName} size={30} color="black" />
             </Box>
           ) : null
          }
          <Text fontSize={20} fontWeight={400} color="gray.600">{label}</Text>
        </HStack>
        {description ? <Text fontSize={12} mt={2}>{description}</Text> : null}
      </VStack>
    </TouchableOpacity>
  )
}

export default ProfileMenuOption
