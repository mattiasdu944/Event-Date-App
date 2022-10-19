import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    text: {
      primary: "#00BCD4",
    },
    orange: {
      200:'#FE6148',
      500:'#FC382E',
    },
    white:{
      200:'#fefefe',
      500:'#F0F2F7',
    }
  

  },
  fonts: {
    body: 'Gilroy, sans-serif',
  },

  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#111222',
        color: 'white',
      },
    },
  },
})