import React from 'react'
import {Box, Button, Checkbox, Heading, HStack, Link, Radio, Text, VStack} from "native-base";
import Input from '../../components/forms/Input'

const SignInScreen = ({ navigation }) => {
  const handleNavigateToSignUp = () => {
    navigation?.navigate('SignUp')
  }

  return (
    <VStack paddingX={3} justifyContent={"center"} height={"100%"}>
      <Heading textAlign={"center"} mb={10}>Sign in</Heading>

      <Box mb={5}>
        <Input label={"Email"} placeholder={"email@domain.com"} />
      </Box>

      <Box mb={5}>
        <Input label={"Password"} type={"password"} placeholder={"********"} />
      </Box>

      <Box mb={5}>
        <Button size={"lg"}>Sign in</Button>
      </Box>

      <HStack>
        <Text>Don't have an account? </Text><Link _text={{ textDecoration: 'underline' }} onPress={handleNavigateToSignUp}>Create one</Link>
      </HStack>
    </VStack>
  )
}

export default SignInScreen
