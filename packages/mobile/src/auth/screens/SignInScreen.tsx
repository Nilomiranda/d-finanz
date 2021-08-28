import React from 'react'
import {Box, Button, Checkbox, Radio} from "native-base";
import Input from '../../components/forms/Input'

const SignInScreen = () => {
  return (
    <Box>
      Sign In Screen

      <Button onPress={() => null} variant={"solid"}>Test</Button>
      <Button onPress={() => null} variant={"outline"}>Test</Button>
      <Button onPress={() => null} variant={"link"}>Test</Button>

      <Button onPress={() => null} variant={"solid"} size={"lg"} colorScheme={"red"}>Test</Button>
      <Button onPress={() => null} variant={"outline"} size={"lg"} colorScheme={"red"}>Test</Button>
      <Button onPress={() => null} variant={"link"} size={"lg"} colorScheme={"red"}>Test</Button>

      <Input label="Email" />
      <Input label="Password" type={"password"} />
      <Input label="Email" isInvalid={true} errorMessage={"Invalid email"} />

      <Checkbox value={"Yes"}>Yes</Checkbox>
      <Checkbox value={"No"}>No</Checkbox>

      <Radio.Group name={"test"}>
        <Radio value={"No"} my={1}>No</Radio>
        <Radio value={"Yes"} my={1}>Yes</Radio>
      </Radio.Group>
    </Box>
  )
}

export default SignInScreen
