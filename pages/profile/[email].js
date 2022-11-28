import { Layout } from '../../components/ui'
import { dbUsers } from "../../database";

import styled from 'styled-components'
import { Perfil, TabMenu } from '../../components/profile';
import { Container } from '@chakra-ui/react';


const PerfilUsuario = ({ perfil }) => {
  return (
    <Layout title={perfil.name} description={perfil.description}>
      <Section>
        <Container maxW='container.md'>

          <Perfil
            perfil={perfil}
          />

          <TabMenu
            perfil={perfil}
          />

        </Container>
      </Section>
    </Layout>
  )
}

export default PerfilUsuario


export const getServerSideProps = async ({params}) => {
  const {email} = params;
  const perfil = await dbUsers.getDataUserByEmail(email);

  return {
    props:{
      perfil
    }
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