import { Container, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Layout } from '../components/ui'

const NotFound = () => {
  return (
    <Layout title='404' description='Event Date - Pagina no encontrada'>

      <Section>
        <Container maxW='container.lg' display='flex' flexDirection='column' textAlign='center' alignItems='center' justifyContent='center' h='100%'>
          <Text textStyle='h1'>404 | Pagina no encontrada</Text>
            <Link href='/'>
              <a>Volver al sitio</a>
            </Link>
        </Container>
      </Section>
    </Layout>
  )
}

const Section = styled.section`
display: flex;
align-items: center;
  padding: 5rem 0rem 2rem;
  background-image: linear-gradient(to right, rgb( 0 0 0 / .6), rgb(0 0 0 / .8)), url("https://images.pexels.com/photos/7130475/pexels-photo-7130475.jpeg?auto=compress&cs=tinysrgb&w=1600");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 90vh;
`

export default NotFound