import React from 'react'
import {Input as NativeInput, IInputProps, Box, Text} from 'native-base'

interface InputProps extends IInputProps {
  label?: string
  errorMessage?: string
}

const Input = (props: InputProps) => {
  const { label, errorMessage } = props

  return (
    <Box>
      { label ? <Text fontWeight={"bold"} marginBottom={1.5} color={errorMessage ? "red.500" : "black"}>{label}</Text> : null }

      <NativeInput {...props} variant={"outline"} autoCorrect={false} />

      { errorMessage ? <Text fontSize={"sm"} marginTop={1.5} color={"red.500"}>{errorMessage}</Text> : null }
    </Box>
  )
}

export default Input
