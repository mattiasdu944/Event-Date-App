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
        // bg: '#111222',
        bg: '#000910',
        color: 'white',
      },
    },
  },
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ['40px', '4rem'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
    h2: {
      fontSize: ['30px', '3rem'],
      fontWeight: '800',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
    h3: {
      fontSize: ['26px', '2rem'],
      fontWeight: '700',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
    p1: {
      fontSize: ['20px', '1.25rem'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
  },
})