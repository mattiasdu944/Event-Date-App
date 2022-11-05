import { useUser } from "../hooks";
import { Layout } from "../components/ui";

import styled from "styled-components";
import { Avatar, Box, Container, Text, WrapItem } from "@chakra-ui/react";

const Profile = () => {
  const {perfil} = useUser();

  return (
    <Layout
      title='Perfil'
      description={`Perfil de  en Event Date`}
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
              {perfil.descripcion ? perfil.descripcion :  'No hay descripcion de este perfil' }
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


// export async function getServerSideProps (context) {
//     const {user} = await getSession(context);
//     const {data} = await usuarioApi.get(`usuario/${user.id}`);
//     return{
//         props:{
//             perfil:data
            
//         }
//     }
// }
