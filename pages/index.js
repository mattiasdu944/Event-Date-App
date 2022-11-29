import Link from "next/link";
import { dbEventos } from "../database/index";
import { Banner, ListadoEventos,Layout } from '../components/ui'

import styled from "styled-components"
import { Box, Container, Text } from "@chakra-ui/react"


const HomePage = ({ eventos }) => {

  return (
    <Layout title='Inicio' description='Ultimas noticias y novedades de eventos'>
      <Section>
        <Container maxW='container.xl'>
          <Banner evento={eventos[0]}/>
        </Container>
        <Container maxW='container.lg'>
          <Box>
            <Box mb={10} display='flex' alignItems='center' justifyContent='space-between'>
              <Text textStyle='h2'  fontWeight={700}>
                Proximos Eventos
              </Text>
              <Box backgroundColor='#00000090' padding='.75rem' borderRadius='.5rem'>
                <Link href='/eventos'>
                  <a>Ver todos los eventos</a>
                </Link>
              </Box>
            </Box>
            <ListadoEventos eventos={eventos} />
          </Box>

        </Container>
      </Section>
    </Layout>
  )
}

export default HomePage


export async function getStaticProps(ctx){
  const eventos = await dbEventos.getAllEvents();

  return {
       props: {eventos},
       revalidate: 43200
  }
}


const Section = styled.section`
  padding: 5rem  0;
  background-image: linear-gradient(to right, rgb( 0 0 0 / .6), rgb(0 0 0 / .8)), url("https://images.pexels.com/photos/7130475/pexels-photo-7130475.jpeg?auto=compress&cs=tinysrgb&w=1600");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
`



