import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react";

import '../styles/globals.css'
import { theme } from '../themes'
import { AuthProvider } from '../context/AuthProvider';

function MyApp({ Component, pageProps }) {
  return(
    <SessionProvider>
      <ChakraProvider resetCSS theme={theme}>
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp
