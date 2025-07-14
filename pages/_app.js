import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'

function Application({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default Application