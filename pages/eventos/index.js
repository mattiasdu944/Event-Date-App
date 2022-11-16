import { Button, Container, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import { Layout } from '../../components/ui'

const Eventos = () => {
  return (
    <Layout title={'Eventos'} description={'Encuentra todos los eventos mas cercanos'}>
      <Section>
        <Container maxW='container.lg'>
          <InputGroup size='md'>
          <Input
              pr="4.5rem"
              type='text'
              placeholder="Buscar Evento"
              borderColor="whiteAlpha.300"
              focusBorderColor="orange.500"
              _hover={{ outline: "orange.200" }}
              
            />
            <InputRightElement width='4.5rem'>
                <Button>
                  Buscar
                </Button>
            </InputRightElement>
          </InputGroup>
        </Container>
      </Section>
    </Layout>
  )
}


const Section = styled.section`
  flex-direction: column;
  padding: 5rem 0rem 2rem;
  background-image: linear-gradient(to right, rgb( 0 0 0 / .6), rgb(0 0 0 / .8)), url("https://images.pexels.com/photos/7130475/pexels-photo-7130475.jpeg?auto=compress&cs=tinysrgb&w=1600");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
`

export default Eventos