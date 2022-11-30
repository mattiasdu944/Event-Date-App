import { dbCategorias, dbEventos } from '../../database'
import { Layout } from '../../components/ui'
import { FormularioEvento } from '../../components/eventos/FormularioEvento'


import styled from 'styled-components'
import { Container, Text } from '@chakra-ui/react'

const NewEventPage = ({ categorias, ciudades, modalidades }) => {
    return (
        <Layout title='Crea un nuevo evento' description='Crea un nuevo evento en nuestro sitio web EventDate'>
            <Section>
                <Container maxW='container.lg'>

                    <Text textStyle='h2' >Crea un nuevo evento</Text>

                    {/* Formulario */}
                    <FormularioEvento
                        categorias={categorias}
                        ciudades={ciudades}
                        modalidades={modalidades}
                    />
                </Container>
            </Section>
        </Layout>
    )
}



export async function getStaticProps(ctx) {
    const categorias = await dbCategorias.getAllCategories();
    const ciudades = await dbEventos.getLocalizedEvent();
    const modalidades = await dbEventos.getModalidadEvent();

  
    return {
        props: { categorias, ciudades, modalidades }
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



export default NewEventPage