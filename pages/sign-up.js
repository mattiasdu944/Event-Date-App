import { FormSignUp } from "../components/signup"

import { Container, Text } from "@chakra-ui/react"
import styled from "styled-components"



const SignUp = () => {
  

  return (
    <Section>
        <Container maxW='container.lg'>
          <FormContainer>

            <Text
              bgGradient='linear(to-r, #fc382e, #FF0080)'
              bgClip='text'
              fontSize='6xl'
              fontWeight='extrabold'
              textAlign='center'
              >
                Event Date
            </Text>
            <FormSignUp/>
            
          </FormContainer>
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

const FormContainer = styled.div`
    justify-content: center;
    display: grid;
    margin: 0 auto;
    padding: 2rem ;
    background-color: rgba(0, 0, 0, .2);
    backdrop-filter: blur(20px);
    border-radius: 8px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0 , .2)
`

export default SignUp