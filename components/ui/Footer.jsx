import styled from 'styled-components'
import { Box, Container, Flex, Text } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <FooterComponent>
        
        <Container maxW='container.lg'>
            <Flex justifyContent='space-between' alignItems='center'>
                <Text 
                    fontWeight={800}   
                    bgGradient='linear(to-l,  orange.500, orange.200)'
                    bgClip='text'
                    fontSize='2xl'
                >
                    Event Date
                </Text>
                <Box display='flex' flexWrap='wrap' alignItems='center' gap={10}>
                    <Text>&copy;Mattias Duarte - 2022</Text>
                </Box>
            </Flex>
        </Container>

    </FooterComponent>
  )
}


const FooterComponent = styled.footer`

width: 100%;
/* margin-top: 3rem; */
    background-color: #00000084;
    border-top:1px solid #fefefe2e;
    padding: 4rem 0rem;
    z-index: 100;

`