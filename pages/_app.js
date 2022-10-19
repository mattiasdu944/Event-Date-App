import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react";

import { theme } from '../themes'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <SessionProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp
