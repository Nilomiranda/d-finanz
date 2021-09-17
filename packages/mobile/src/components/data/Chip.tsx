import { Box, Button, HStack, Icon, IconButton, Text } from 'native-base'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface ChipProps {
  text: string
  closable?: boolean
  onClose?: () => void
}

const Chip = ({ text, closable = false, onClose = () => null }: ChipProps) => {
  return (
    <HStack alignItems="stretch" borderWidth={1} borderColor="black" pl={1}>
      <Text fontSize="sm">{text}</Text>
      { closable ? <IconButton onPress={onClose} ml={2} variant="solid" size="xs" my={0} borderRadius={0} p={1} icon={<Icon color="white" size={3} as={<MaterialCommunityIcons name="close" />} />} /> : null }
    </HStack>
  )
}

export default Chip
