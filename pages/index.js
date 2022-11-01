import { Layout } from '../components/ui/Layout'
import { getSession } from "next-auth/react"


import { Text } from "@chakra-ui/react"
import styled from "styled-components"
import axios from 'axios'

const HomePage = ({session}) => {
  const {user} = session
  return (
    <Layout title='Inicio' description='Ultimas noticias y novedades de eventos'>
      <Section>
      <Text textAlign='center' fontWeight={700} fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
        Bienvenido
      </Text>
        <Text
          fontWeight={800}
          bgGradient='linear(to-r, orange.500 ,orange.200)'
          textAlign='center'
          bgClip='text'
          fontSize={{ base: '24px', md: '40px', lg: '56px' }}
        >
          {user.name}
        </Text >
        <Text textAlign='center' fontWeight={700} fontSize={{ base: '24px', md: '40px', lg: '56px' }}>

        Esto es Event Date <br /> y este proyecto esta aun en desarollo :D <br/>
        Gracias por registrarte ♥
        </Text>
      </Section>
    </Layout>
  )
}

export default HomePage

const Section = styled.section`
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
  padding: 5rem 1rem 0;
  min-height: 100vh;
`

export async function getServerSideProps(ctx) {
  const res = await axios.get('http://localhost:3000/api/usuario')
  // const data = await res.json()
  console.log(res);
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
      },
    }
  }

  return {
    props: {session},
  }
}