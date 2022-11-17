import { useState } from 'react';
import { useEvento } from '../../hooks';
import { Layout, Spinner } from '../../components/ui'
import { BarCategorias, Buscador, Listado } from '../../components/eventos';
import { dbCategorias } from "../../database/index";

import styled from 'styled-components'
import { Box, Container } from '@chakra-ui/react'

const Eventos = ({ categorias }) => {

  const [param, setParam] = useState('')
  const { eventos, isLoading } = useEvento(`${param}`);

  return (
    <Layout title={'Eventos'} description={'Encuentra todos los eventos mas cercanos'}>
      <Section>
        <Container maxW='container.lg'>

          <Buscador 
            setParam={setParam}
          />

          <Box display='flex' gap={5}>
            <BarCategorias
              categorias={categorias}
              setParam={setParam}
            />

            {
              isLoading
                ? <Box minH='80vh' display='flex' alignItems='center'> <Spinner /> </Box>
                : <Listado eventos={eventos}/>
            }

          </Box>


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

export async function getStaticProps(ctx) {
  const categorias = await dbCategorias.getAllCategories();

  return {
    props: { categorias }
  }

}


export default Eventos