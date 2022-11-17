import { Layout } from "../../components/ui";
import { TicketCard } from "../../components/eventos/TicketCard";
import { dbEventos } from "../../database/index";
import { formatFecha } from "../../utils/helpers";

import styled from "styled-components";
import { Box, Container, Text } from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";

const PageEvento = ({ evento }) => {
    const { categoria, descripcion, fecha_evento, hora_evento, imagen_evento, modalidad, titulo, user:usuario, ticket, Localizacion:localizacion, direccion } = evento
    
    return (
        <Layout title={titulo}>
            <Section>
                <Container maxW={{base:'container.lg', md:'container.xl'}}>
                    <style jsx>{`
                        .portada{
                            background-image: linear-gradient(to right, rgb( 0 0 0 / .45), rgb(0 0 0 / .2)), url(${imagen_evento});
                            background-size: cover;
                            background-repeat: no-repeat;
                            background-position: center center;
                            border-radius: .75rem;
                            width: 100%;
                            padding: 10rem 4rem;
                        }

                        @media (max-width: 768px){
                            .portada{
                                padding: 3rem 1rem;
                            }
                        }
                    `}</style>

                    <div className="portada">
                        <Box mb='3rem' >
                            <Text textStyle='h1' mb={5}>{`${titulo}`}</Text>
                            <Text textStyle='p1' color='white.200' fontWeight={500}>Por: {`${usuario.name}`}</Text>
                        </Box>
                        
                        <Box mb={4}>
                            <Text maxW='550px' mb={4} fontSize='1.1rem'>{direccion}</Text>
                            <Text display='flex' alignItems='center' gap={3} fontSize='1.1rem' fontWeight='700'> <IoLocationOutline/>{`${localizacion}`} </Text>
                        </Box>
                    </div>
                </Container>
                
                <Container maxW='container.lg' mt='3rem' display='flex' flexDirection={{base:'column',md:'row'}} gap={9}>
                    <Box>
                        <Box display='flex' mb={5} alignItems='center' gap={5}>
                            <Avatar src={usuario.image} alt={usuario.name}/>
                            <Box>
                                <Text textStyle='h3'>{usuario.name}</Text>
                                <Text>{usuario.email}</Text>
                            </Box>
                        </Box>
                        <Box mb='2rem'>
                            <Text textStyle='h2' mb={5}>Descripcion</Text>
                            <Text lineHeight={1.75}>
                                {descripcion}
                            </Text>
                        </Box>

                        <Box>
                            <Text textStyle='h3' mb={3}>Fecha y Hora</Text>
                            <Text lineHeight={1.75} fontSize='1.15rem'>
                                Fecha: {formatFecha(fecha_evento)}
                            </Text>
                            <Text lineHeight={1.75} fontSize='1.15rem'>
                                Hora: {`${hora_evento}`}
                            </Text>
                        </Box>
                    </Box>

                    <Box minW='250px' display='flex' flexDirection='column' gap={5}>
                        <Box>
                            <Text textStyle='h3' mb={3}>Localizacion del Evento</Text>
                            <Text display='flex' mb={3} alignItems='center' gap={3} fontSize='1.1rem' fontWeight='400'> <IoLocationOutline/>{`${localizacion}`} </Text>
                            <Text fontSize='1.1rem' fontWeight='400'>{direccion}</Text>
                        </Box>
                        <Box>
                            
                            <Text textStyle='h3' mb={3}>Tickets</Text>
                            {ticket.map( (ticket, index) => 
                                <TicketCard
                                    key={index}
                                    ticket={ticket}	
                                />
                            )}
                        </Box>
                        
                    </Box>
                </Container>
            </Section>
        </Layout>
    )
}


export const getStaticPaths = async (ctx) => {

    const eventoSlug = await dbEventos.getAllSlugEvents();

    return{
        paths: eventoSlug.map( ({slug}) => ({
            params:{
                slug
            }
        })),
        fallback: 'blocking'
    }
}



export const getStaticProps = async ({params}) => {
    const {slug} = params

    const evento = await dbEventos.getEventBySlug( slug )

    if( !evento ){
        return{
            redirect:{
                destination:'/',
                permanent:false
            }
        }
    }

    return {
        props: {
            evento
        },
        revalidate: 3600
    }
}


const Section = styled.section`
  flex-direction: column;
  padding: 5rem 0rem 2rem;
  background-image: linear-gradient(to right, rgb( 0 0 0 / .6), rgb(0 0 0 / .8)), url("https://images.pexels.com/photos/7130475/pexels-photo-7130475.jpeg?auto=compress&cs=tinysrgb&w=1600");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
`

const Avatar = styled.img`
    border-radius: 100%;
    width: 50px;
`

export default PageEvento