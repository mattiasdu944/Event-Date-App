import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import { theme } from '../themes'

function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
