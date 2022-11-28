import { dbUsers } from "../../database";
import { Layout } from "../../components/ui";
import { Perfil, TabMenu } from "../../components/profile";

import styled from "styled-components";
import { Container } from "@chakra-ui/react";
import { getSession } from "next-auth/react";

const Profile = ({ perfil }) => {

  return (
    <Layout
      title='Perfil'
      description={`Perfil de  en Event Date`}
    >
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

export default Profile

export async function getServerSideProps(ctx) {
  const { user } = await getSession(ctx)
  const perfil = await dbUsers.getDataUser(user.id)

  return {
    props: {
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

