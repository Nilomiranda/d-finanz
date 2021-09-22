import React, {useState} from 'react'
import {Box, Button, Heading, HStack, Link, VStack, Text, useToast} from "native-base";
import Input from "../../components/forms/Input";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {MainStackParamsList} from "../../navigators/MainNavigator";
import {graphql, useMutation} from "react-relay";

type SignUpScreenProps = NativeStackScreenProps<MainStackParamsList, 'SignUp'>

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const toast = useToast()

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const SignUpMutation = graphql`
    mutation SignUpScreenMutation ($name: String!, $email: String!, $password: String!) {
      createUser(input: { name: $name, email: $email, password: $password }) {
        name
        email
      }
    }
  `

  const [signUp, signingUp] = useMutation(SignUpMutation)

  const handleNavigateToSignIn = () => {
    navigation?.navigate('SignIn')
  }

  const handleNavigateToAccountConfirmation = () => {
    navigation?.navigate('AccountConfirmation')
  }

  const handleAccountCreated = () => {
    navigation?.navigate('AccountConfirmation', { email })
  }

  const handleSignUp = async () => {
    signUp({
      variables: {
        name,
        email,
        password
      },
      onCompleted() {
        handleAccountCreated()
        toast.show({
          description: 'Account created! Check your email for a confirmation code.',
          status: 'info',
          isClosable: true,
          duration: 5000,
        })
      },
      onError() {
        toast.show({
          description: 'Error trying to create your account. Please try again in few moments',
          status: 'error',
          isClosable: true,
          duration: 5000,
        })
      }
    })
  }

  return (
    <VStack paddingX={3} justifyContent={"center"} height={"100%"}>
      <Heading textAlign={"center"} mb={10}>Sign up</Heading>

      <Box mb={5}>
        <Input label={"Email"} placeholder={"email@domain.com"} autoCapitalize={"none"} value={email} onChangeText={(value) => setEmail(value)} />
      </Box>

      <Box mb={5}>
        <Input label={"Name"} placeholder={"Robert"} value={name} onChangeText={(value) => setName(value)} />
      </Box>

      <Box mb={5}>
        <Input label={"Password"} type={"password"} placeholder={"********"} value={password} onChangeText={(value) => setPassword(value)} />
      </Box>

      <Box mb={5}>
        <Input label={"Password confirmation"} type={"password"} placeholder={"********"} />
      </Box>

      <Box mb={5}>
        <Button size={"lg"} onPress={handleSignUp} isLoading={signingUp} isLoadingText={"Creating account"}>Create account</Button>
      </Box>

      <HStack>
        <Text>Have an account? </Text><Link _text={{ textDecoration: 'underline' }} onPress={handleNavigateToSignIn}>Sign in</Link>
      </HStack>

      <Box>
        <Link _text={{ textDecoration: 'underline' }} onPress={handleNavigateToAccountConfirmation}>Confirm my account</Link>
      </Box>
    </VStack>
  )
}

export default SignUpScreen
