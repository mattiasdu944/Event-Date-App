import { useUser } from "../hooks";
import { Layout, Spinner } from "../components/ui";
import { Perfil, TabMenu } from "../components/profile";

import styled from "styled-components";
import { Container } from "@chakra-ui/react";




const Profile = () => {
  const { perfil, isLoading, error } = useUser();

  return (
    <Layout
      title='Perfil'
      description={`Perfil de  en Event Date`}
    >
      <Section>
        <Container maxW='container.md'>
          {
            isLoading
              ?
              <Spinner />
              :
              <>
                <Perfil
                  perfil={perfil}
                />
                <TabMenu
                  perfil={perfil}
                />
              </>
          }

        </Container>
      </Section>

    </Layout>
  )
}

export default Profile

const Section = styled.section`
  flex-direction: column;
  padding: 5rem 0rem 2rem;
  background-image: linear-gradient(to right, rgb( 0 0 0 / .6), rgb(0 0 0 / .8)), url("https://images.pexels.com/photos/7130475/pexels-photo-7130475.jpeg?auto=compress&cs=tinysrgb&w=1600");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
`

