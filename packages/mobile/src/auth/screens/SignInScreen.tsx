import React, {useState} from 'react'
import {Box, Button, Checkbox, Heading, HStack, Link, Radio, Text, useToast, VStack} from "native-base";
import Input from '../../components/forms/Input'
import {useMutation} from "urql";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {MainStackParamsList} from "../../navigators/MainNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from '../../interfaces/user';

const SignInMutation = `
  mutation ($email: String!, $password: String!) {
    createSession(input: { email: $email, password: $password }) {
      user {
        email
        name
      }
      token
    }
  }
`

type SignInScreenProps = NativeStackScreenProps<MainStackParamsList, 'SignIn'>

const SignInScreen = ({ route, navigation }: SignInScreenProps) => {
  const [email, setEmail] = useState(route?.params?.email || '')
  const [password, setPassword] = useState('')
  const [signingIn, setSigningIn] = useState(false)

  const toast = useToast()
  const [, signIn] = useMutation(SignInMutation)

  const handleNavigateToSignUp = () => {
    navigation?.navigate('SignUp')
  }

  const handleNavigateToAccountConfirmation = () => {
    navigation?.navigate('AccountConfirmation')
  }

  const handleNavigateToAccountRecovery = () => {
    navigation?.navigate('AccountRecovery', { email })
  }

  const handleSignedIn = (signInResponse: { data: { createSession: { token: string; user: User } } }) => {
    AsyncStorage.setItem('FINANZ_JWT_TOKEN', signInResponse?.data?.createSession?.token)
    navigation?.navigate('Home')
  }

  const handleSignIn = async () => {
    try {
      setSigningIn(true)
      const signInResults = await signIn({
        email,
        password
      })
      handleSignedIn(signInResults as any)
    } catch (err) {
      toast.show({
        description: 'Error signing you in. Please try again in few moments',
        status: 'error',
        isClosable: true,
        duration: 5000,
      })
    } finally {
      setSigningIn(false)
    }
  }

  return (
    <VStack paddingX={3} justifyContent={"center"} height={"100%"}>
      <Heading textAlign={"center"} mb={10}>Sign in</Heading>

      <Box mb={5}>
        <Input label={"Email"} placeholder={"email@domain.com"} value={email} onChangeText={(value) => setEmail(value)} autoCapitalize="none" />
      </Box>

      <Box mb={5}>
        <Input label={"Password"} type={"password"} placeholder={"********"} value={password} onChangeText={(value) => setPassword(value)} />
      </Box>

      <Box mb={5}>
        <Button size={"lg"} isLoading={signingIn} isLoadingText={"Signing in"} onPress={handleSignIn}>Sign in</Button>
      </Box>

      <HStack>
        <Text>Don't have an account? </Text><Link _text={{ textDecoration: 'underline' }} onPress={handleNavigateToSignUp}>Create one</Link>
      </HStack>

      <Box>
        <Link _text={{ textDecoration: 'underline' }} onPress={handleNavigateToAccountConfirmation}>Confirm my account</Link>
      </Box>

      <Box mt={4}>
        <Link _text={{ textDecoration: 'underline' }} onPress={handleNavigateToAccountRecovery}>Forgot my password</Link>
      </Box>
    </VStack>
  )
}

export default SignInScreen
