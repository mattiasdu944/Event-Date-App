import { CardUsuario, Evento } from '../ui'

import styled from 'styled-components'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text } from '@chakra-ui/react'

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
                        <ListadoEventos>
                            {eventos.map(evento => 
                                <Evento
                                    key={evento.slug}
                                    evento={evento}
                                />       
                            )}
                        </ListadoEventos>
                    </TabPanel>
                    <TabPanel>
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

                    </TabPanel>
                    <TabPanel>
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
