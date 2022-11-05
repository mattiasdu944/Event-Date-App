import { useUser } from "../hooks";
import { Layout } from "../components/ui";
import { Perfil } from "../components/profile";

import styled from "styled-components";
import { Container } from "@chakra-ui/react";

const Profile = () => {
  const { perfil } = useUser();

  return (
    <Layout
      title='Perfil'
      description={`Perfil de  en Event Date`}
    >
      <Section>
        <Container maxW='container.sm'>
        <Perfil
          perfil={perfil}
        />  
        </Container>
      </Section>

    </Layout>
  )
}

export default Profile

const Section = styled.section`
  flex-direction: column;
  padding: 5rem 1rem 0;
  min-height: 100vh;
`

