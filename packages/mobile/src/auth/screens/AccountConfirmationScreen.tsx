import React from 'react'
import {Box, Button, Heading, HStack, Link, VStack, Text} from "native-base";
import Input from "../../components/forms/Input";

const AccountConfirmationScreen = () => {
  return (
    <VStack paddingX={3} justifyContent={"center"} height={"100%"}>
      <Heading textAlign={"center"} mb={10}>Confirm your account</Heading>

      <Box mb={5}>
        <Input label={"Email"} placeholder={"email@domain.com"} />
      </Box>

      <Box mb={5}>
        <Input label={"Code"} placeholder={"0000"} />
      </Box>

      <Box mb={5}>
        <Button size={"lg"}>Confirm account</Button>
      </Box>
    </VStack>
  )
}

export default AccountConfirmationScreen
