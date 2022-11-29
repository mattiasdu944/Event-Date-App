import { Buscador } from '../../components/eventos'
import { Layout, ListadoEventos } from '../../components/ui'

import styled from 'styled-components'
import { Container, Text } from '@chakra-ui/react'

const SearchPage = ({ eventos, query }) => {
    return (
        <Layout title={`Busqueda de ${query}`} description={`EventDate - Resultados de la busque sobre ${query}`}>
            <Section>
                <Container maxW='container.lg'>
                    <Buscador/>
                    <Text textStyle='h3'>
                        Resultado de la busqueda: {query}
                    </Text>
                    <ListadoEventos
                        eventos={eventos}
                    />

                </Container>
            </Section>
        </Layout>
    )
}

export async function getServerSideProps({params}) {
    const {query} = params
    const response = await fetch(`${process.env.HOSTING}/api/eventos?titulo=${query}`)
    const eventos = await response.json();

    return {
         props: {eventos, query},
    }
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

export default SearchPage