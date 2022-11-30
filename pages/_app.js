import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react";

import '../styles/globals.css'
import { theme } from '../themes'
import { AuthProvider } from '../context/AuthProvider';
import { EventoProvider } from '../context/EventoProvider';

function MyApp({ Component, pageProps }) {
  return(
    <SessionProvider>
      <EventoProvider>
        <ChakraProvider resetCSS theme={theme}>
          <AuthProvider>
              <Component {...pageProps} />
          </AuthProvider>
        </ChakraProvider>
      </EventoProvider>
    </SessionProvider>
  )
}

export default MyApp
