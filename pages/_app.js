import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react";

import { theme } from '../themes'
import '../styles/globals.css'
import { AuthProvider } from '../context/AuthProvider';
import { UserProvider } from '../context/UserProvider';

function MyApp({ Component, pageProps }) {
  return(
    <SessionProvider>
      <ChakraProvider resetCSS theme={theme}>
        <AuthProvider>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </AuthProvider>
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp
