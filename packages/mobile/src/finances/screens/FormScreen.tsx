import { Box, Button, VStack } from 'native-base'
import React from 'react'
import Input from '../../components/forms/Input'

const FormScreen = () => {
  return (
    <VStack p={4}>
      <Box mb={4}>
        <Input type="number" label="Amount" placeholder="Amount" />
      </Box>

      <Box mb={4}>
        <Input type="text" label="Name" placeholder="Name" />
      </Box>

      <Box mb={4}>
        <Input type="text" label="Tags" placeholder="Tags" />
      </Box>

      <Button mb={4}>Save</Button>
    </VStack>
  )
}

export default FormScreen
