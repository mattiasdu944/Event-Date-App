import { useState } from 'react';
import { useEvento } from '../../hooks';
import { dbCategorias } from "../../database/index";
import { Layout, Spinner } from '../../components/ui'

import styled from 'styled-components'
import { Box, Container, Text } from '@chakra-ui/react'
import { Buscador, Listado, SelectCategorias } from '../../components/eventos';


const Eventos = ({ categorias }) => {

  const [param, setParam] = useState('')
  const { eventos, isLoading } = useEvento(`?category=${param}`);

  return (
    <Layout title={'Eventos'} description={'Encuentra todos los eventos mas cercanos'}>
      <Section>
        <Container maxW='container.lg'>
            <Buscador/>
            <Text textStyle='h3' mb={5}>Categorias{param ? `: ${param}` : ''}</Text>

            <SelectCategorias
              categorias={categorias}
              setParam={setParam}
              param={param}
            />

            {
              isLoading
                ? <Box minH='80vh' w='100%' display='flex' alignItems='center'> <Spinner /> </Box>
                : <Listado eventos={eventos}/>
            }
        </Container>
      </Section>
    </Layout>
  )
}



export async function getStaticProps(ctx) {
  const categorias = await dbCategorias.getAllCategories();

  return {
    props: { categorias }
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


export default Eventos