import { Layout } from "../../components/ui";
import styled from "styled-components";

const Profile = () => {
  return (
    <Layout>
      <Section>
        
        Perfil
      </Section>
    </Layout>
  )
}

export default Profile

const Section = styled.section`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 5rem 1rem 0;
  min-height: 100vh;
`
