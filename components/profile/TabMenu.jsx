import { Evento } from '../ui'

import styled from 'styled-components'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Text } from '@chakra-ui/react'

export const TabMenu = ({perfil}) => {
    const { eventos } = perfil
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
                        <Listado>
                            {eventos.map(evento => 
                                <Evento
                                    key={evento.slug}
                                    evento={evento}
                                />       
                            )}
                        </Listado>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )

}

const Listado = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
`
