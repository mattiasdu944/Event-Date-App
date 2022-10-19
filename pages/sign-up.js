import { Container, Text } from "@chakra-ui/react"
import styled from "styled-components"
import { FormSignUp } from "../components/signup"

const SignUp = () => {
  return (
    <Section>
        <Container maxW='container.lg'>
            <Text>Hola Mundo</Text>
            <FormSignUp/>
            
        </Container>
    </Section>
  )
}


const Section = styled.section`
    padding: 4rem 0 1rem;
    background-image: url('https://images.pexels.com/photos/7130475/pexels-photo-7130475.jpeg?auto=compress&cs=tinysrgb&w=1600');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 100vh;
`

export default SignUp