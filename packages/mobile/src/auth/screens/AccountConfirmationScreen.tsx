import React, {useState} from 'react'
import {Box, Button, Heading, HStack, Link, VStack, Text} from "native-base";
import Input from "../../components/forms/Input";

const AccountConfirmationScreen = ({ route, navigation }) => {
  const [email, setEmail] = useState<string>(route?.params?.email)
  const [code, setCode] = useState('')

  return (
    <VStack paddingX={3} justifyContent={"center"} height={"100%"}>
      <Heading textAlign={"center"} mb={10}>Confirm your account</Heading>

      <Box mb={5}>
        <Input label={"Email"} placeholder={"email@domain.com"} value={email} onChangeText={(value) => setEmail(value)} />
      </Box>

      <Box mb={5}>
        <Input label={"Code"} placeholder={"0000"} value={code} onChangeText={(value) => setCode(value)} />
      </Box>

      <Box mb={5}>
        <Button size={"lg"}>Confirm account</Button>
      </Box>
    </VStack>
  )
}

export default AccountConfirmationScreen
