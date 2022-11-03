import { getSession, useSession } from "next-auth/react";
import { usuarioApi } from "../../apis";
import { Layout } from "../../components/ui";

import styled from "styled-components";
import { Avatar, Box, Container, Flex, Text, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Profile = () => {
  const [perfil, setPerfil] = useState({})
  const {data : {user}}  = useSession()
    
  const getUserProfile = async () =>{
    // console.log(user.id);
    const {data} = await usuarioApi.get(`http://localhost:3000/api/usuario/${user.id}`)
    setPerfil(data)
  }

  useEffect(() => {
    getUserProfile();
    
    console.log(perfil);
  
  }, [])
  


  return (
    <Layout
      title='Perfil'
      description={`Perfil de ${perfil.name} en Event Date`}
    >
      <Section>
        <Container maxW='container.lg'>

          <Box display={{ md: 'flex' }} alignItems='center' justifyContent='center' gap={5} mb='3rem'>
            <Box display='flex' alignItems='center' justifyContent='center'>
              <WrapItem border='4px' borderColor='orange.500' rounded='full'>
                <Avatar size={{ base: 'xl', md: '2xl' }} name={perfil.name} src={perfil.image} />
              </WrapItem>
            </Box>
            <Box textAlign={{ base: 'center', md: 'start' }}>
              <Text textStyle='h2' fontWeight={700}>
                {perfil.name}
              </Text>
              <Text>
                {perfil.email}
              </Text>
            </Box>
          </Box>
          <Box>
            <Text textStyle='h2'>
              Descripcion
            </Text>
            <Text>
              {perfil.descripcion === '' ? 'No hay descripcion de este perfil' : perfil.descripcion}
            </Text>
          </Box>
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

// export async function getServerSideProps(ctx) {
//   try {
//     const { user } = await getSession(ctx)
//     const { data } = await usuarioApi.get(`/usuario/${user.id}`)
//     return {
//       props: {
//         perfil: data
//       },
//     }

//   } catch (error) {
//     console.log(error);
//     return;
//   }
// }