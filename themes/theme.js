import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    text: {
      primary: "#00BCD4",
    },
    orange: {
      200:'#FE6148',
      500:'#FC382E',

    }

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