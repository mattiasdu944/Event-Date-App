import { CardUsuario, Evento } from '../ui'

import styled from 'styled-components'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Box } from '@chakra-ui/react'

export const TabMenu = ({perfil}) => {
    const { eventos, seguidores, seguidos } = perfil
    return (
        <>
            <Tabs colorScheme='orange.200' size={{base:'sm', md:'md'}} variant='enclosed' borderColor='gray.700'>
                <TabList color='orange.200'>
                    <Tab>Eventos</Tab>
                    <Tab>Seguidores</Tab>
                    <Tab>Seguidos</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel> 
                        {
                            eventos.length !== 0
                            ?                            
                                <ListadoEventos>
                                    {eventos.map(evento => 
                                        <Evento
                                            key={evento.slug}
                                            evento={evento}
                                        />       
                                    )}
                                </ListadoEventos>

                            :
                                <Box 
                                    minH='20vh' 
                                    display='flex' 
                                    flexDirection='column' 
                                    alignItems='center' 
                                    justifyContent='center'
                                    gap={4}
                                >
                                    <Text textColor='whiteAlpha.500'>
                                        No hay eventos
                                    </Text>
                                    <Text textStyle='h1' textColor='whiteAlpha.500'>
                                    {`${('¯\_(ツ)_/¯').toString()}`}
                                    </Text>
                                </Box>

                        }


                    </TabPanel>
                    <TabPanel>
                        {
                            seguidores.length !== 0
                            ? 
                                <>
                                    <Text textStyle='h3' mb={5}>Compartes Gustos con:</Text>
                                    <ListadoSeguidores>
                                        {
                                            seguidores.map(usuario => 
                                                <CardUsuario
                                                key={usuario.email}
                                                usuario={usuario}
                                                />
                                                )
                                            }
                                    </ListadoSeguidores>
                                </>
                            :
                            <Box 
                                minH='20vh' 
                                display='flex' 
                                flexDirection='column' 
                                alignItems='center' 
                                justifyContent='center'
                                gap={4}
                            >
                                <Text textColor='whiteAlpha.500'>
                                    Aun no tienes seguidores
                                </Text>
                                <Text textStyle='h1' textColor='whiteAlpha.500'>
                                {`${('¯\_(ツ)_/¯').toString()}`}
                                </Text>
                            </Box>
                        }


                    </TabPanel>
                    <TabPanel>

                        { seguidos.length !== 0
                        ?
                            <>
                                <Text textStyle='h3' mb={5}>Cuentas a las que sigues:</Text>
                                <ListadoSeguidores>
                                    {
                                        seguidos.map(usuario => 
                                            <CardUsuario
                                                key={usuario.email}
                                                usuario={usuario}
                                            />
                                        )
                                    }
                                </ListadoSeguidores>
                            </>
                        :

                            <Box 
                                minH='20vh' 
                                display='flex' 
                                flexDirection='column' 
                                alignItems='center' 
                                justifyContent='center'
                                gap={4}
                            >
                                <Text textColor='whiteAlpha.500'>
                                    Aun no sigues a nadie
                                </Text>
                                <Text textStyle='h1' textColor='whiteAlpha.500'>
                                {`${('¯\_(ツ)_/¯').toString()}`}
                                </Text>
                            </Box>

                        }

                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )

}

const ListadoEventos = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
`

const ListadoSeguidores = styled.div`
    display: grid;
    gap: 1rem;
`
