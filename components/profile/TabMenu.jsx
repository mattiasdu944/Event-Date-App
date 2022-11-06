import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Eventos } from './'
import styled from 'styled-components'

export const TabMenu = () => {
    const eventos = 
    [
        {
            id:'1',
            titulo: 'Concierto Morat',
            image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet nisi enim. In non arcu est. Pellentesque nec ornare purus. Cras ultrices turpis sodales odio faucibus, eget fermentum felis aliquet. Sed non elit sit amet metus maximus cursus ut vitae neque. Cras varius enim ut ullamcorper bibendum. Proin pellentesque felis vitae nunc efficitur, et porta nibh rhoncus. Vestibulum vel risus venenatis, posuere nisi nec, viverra erat. Etiam scelerisque augue et bibendum auctor.",
            fecha_evento:'12-10-2022',
            hora_evento:'12:00 pm',
            localizacion_evento:'La paz - Bolivia',
            direccion_evento:'Casco viejo - Avenida del ejercito - Teatro al aire libre',
        },
        {
            id:'2',
            titulo: 'Google Cloud',
            image: 'https://images.pexels.com/photos/13628541/pexels-photo-13628541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet nisi enim. In non arcu est. Pellentesque nec ornare purus. Cras ultrices turpis sodales odio faucibus, eget fermentum felis aliquet. Sed non elit sit amet metus maximus cursus ut vitae neque. Cras varius enim ut ullamcorper bibendum. Proin pellentesque felis vitae nunc efficitur, et porta nibh rhoncus. Vestibulum vel risus venenatis, posuere nisi nec, viverra erat. Etiam scelerisque augue et bibendum auctor.",
            fecha_evento:'12-10-2022',
            hora_evento:'12:00 pm',
            localizacion_evento:'La paz - Bolivia',
            direccion_evento:'Casco viejo - Avenida del ejercito - Teatro al aire libre',
        },
        {
            id:'3',
            titulo: 'Concierto Colplay',
            image: 'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet nisi enim. In non arcu est. Pellentesque nec ornare purus. Cras ultrices turpis sodales odio faucibus, eget fermentum felis aliquet. Sed non elit sit amet metus maximus cursus ut vitae neque. Cras varius enim ut ullamcorper bibendum. Proin pellentesque felis vitae nunc efficitur, et porta nibh rhoncus. Vestibulum vel risus venenatis, posuere nisi nec, viverra erat. Etiam scelerisque augue et bibendum auctor.",
            fecha_evento:'12-10-2022',
            hora_evento:'12:00 pm',
            localizacion_evento:'La paz - Bolivia',
            direccion_evento:'Casco viejo - Avenida del ejercito - Teatro al aire libre',
        }
    ]

    return (
        <>
            <Tabs colorScheme='orange.200' size={{base:'sm', md:'md'}} variant='enclosed'>
                <TabList color='orange.200'>
                    <Tab>Eventos</Tab>
                    <Tab>Seguidores</Tab>
                    <Tab>Seguidos</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel> 
                        <Listado>
                            {eventos.map(evento => 
                                <Eventos
                                    key={evento.id}
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
    gap: 1rem;
`
