import { signIn, getSession } from "next-auth/react"
import { FormLogin } from "../components/login"
import { Container, Text } from "@chakra-ui/react"

import styled from "styled-components"
import Head from "next/head"

const Login = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Event Date - Iniciar sesion en la plataforma y comienza a disfrutar" />
        <title>Event Date | Login</title>
      </Head>
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
              <FormLogin
                signIn={signIn}
              />
              
            </FormContainer>
          </Container>
      </Section>
    </>
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

export const getServerSideProps = async (ctx) => {
    const session = await getSession(ctx);
    if(session.user){
      return{
        redirect:{
          destination: '/profile/'
        }
      }
    }
    return{
      props:{
        session
      }
    }
}


export default Login;