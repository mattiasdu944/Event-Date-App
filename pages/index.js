import { useEvento } from '../hooks'
import { getSession } from "next-auth/react"
import { Layout } from '../components/ui/Layout'
import { ListadoEventos } from '../components/index'
import { Spinner } from '../components/ui'


import styled from "styled-components"
import { Box, Container, Text } from "@chakra-ui/react"

const HomePage = () => {

  const {eventos, isLoading } = useEvento();

  return (
    <Layout title='Inicio' description='Ultimas noticias y novedades de eventos'>
      <Section>
        <Container maxW='container.lg'>
          <Box>
            <Text textStyle='h2' mb={5} fontWeight={700}>
              Ultimos Eventos
            </Text>

            {
              isLoading
              ? <Box minH='100vh'> <Spinner/> </Box>
              : <ListadoEventos eventos={ eventos } />
            }
            
          </Box>

          <Box>
            <Text fontWeight={700} fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
              Ultimos Eventos
            </Text>
          </Box>

          <Box>
            <Text fontWeight={700} fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
              Ultimos Eventos
            </Text>
          </Box>


        </Container>
      </Section>
    </Layout>
  )
}

export default HomePage

const Section = styled.section`
  padding: 5rem 1rem 0;
  min-height: 100vh;
`

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
      },
    }
  }

  return {
    props: { session },
  }
}