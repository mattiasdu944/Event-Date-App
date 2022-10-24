import { useState } from "react";
import Head from "next/head";
import { signIn, getSession, getProviders } from "next-auth/react";
import { FormSignUp } from "../../components/signup/FormSignUp";
import { FormLogin } from "../../components/login";
import { Container, Text } from "@chakra-ui/react";

import styled from "styled-components";

const SignIn = ({ providers }) => {

  const [register, setRegister] = useState(true);
  
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Event Date - Iniciar sesion en la plataforma y comienza a disfrutar"
        />
        <title>Event Date | Login</title>
      </Head>
      <Section>
        <Container maxW="container.lg">
          <FormContainer>
            <Text
              bgGradient="linear(to-r, #fc382e, orange.200)"
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
              textAlign="center"
            >
              Event Date
            </Text>
            {
                register 
                ? <FormLogin 
                    signIn={signIn} 
                    providers={providers}
                    setRegister={setRegister}
                />
                : <FormSignUp 
                    signIn={signIn} 
                    providers={providers} 
                    setRegister={setRegister}

                /> 
            }
          </FormContainer>
        </Container>
      </Section>
    </>
  );
};
const Section = styled.section`
  padding: 4rem 0 1rem;
  background-image: url("https://images.pexels.com/photos/7130475/pexels-photo-7130475.jpeg?auto=compress&cs=tinysrgb&w=1600");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
`;

const FormContainer = styled.div`
  justify-content: center;
  display: grid;
  margin: 0 auto;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 8px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
`;

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  const providers = await getProviders();
  if(session){
    return{
      props: {
        providers
      },
      redirect:{
        destination:'/'
      }
    }
  }

  return {
    props: {
      session,
      providers
    }
  }
}

export default SignIn;
