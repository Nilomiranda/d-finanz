import { Center, Spinner } from 'native-base'
import React from 'react'

const LoadingScreen = () => {
  return (
    <Center flex={1}>
      <Spinner color="black" />
    </Center>
  )
}

export default LoadingScreen
