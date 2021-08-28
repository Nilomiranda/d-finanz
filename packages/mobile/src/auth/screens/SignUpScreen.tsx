import React from 'react'
import {Box, Button, Heading, HStack, Link, VStack, Text} from "native-base";
import Input from "../../components/forms/Input";

const SignUpScreen = ({ navigation }) => {
  const handleNavigateToSignIn = () => {
    navigation?.navigate('SignIn')
  }

  return (
    <VStack paddingX={3} justifyContent={"center"} height={"100%"}>
      <Heading textAlign={"center"} mb={10}>Sign up</Heading>

      <Box mb={5}>
        <Input label={"Email"} placeholder={"email@domain.com"} />
      </Box>

      <Box mb={5}>
        <Input label={"Name"} placeholder={"Robert"} />
      </Box>

      <Box mb={5}>
        <Input label={"Password"} type={"password"} placeholder={"********"} />
      </Box>

      <Box mb={5}>
        <Input label={"Password confirmation"} type={"password"} placeholder={"********"} />
      </Box>

      <Box mb={5}>
        <Button size={"lg"}>Create account</Button>
      </Box>

      <HStack>
        <Text>Have an account? </Text><Link _text={{ textDecoration: 'underline' }} onPress={handleNavigateToSignIn}>Sign in</Link>
      </HStack>
    </VStack>
  )
}

export default SignUpScreen
