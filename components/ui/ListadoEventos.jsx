import { Evento } from '../ui';

import styled from 'styled-components'
import { Box, Text } from '@chakra-ui/react';

export const ListadoEventos = ({eventos}) => {
    
    if(eventos.length === 0){
        return <Text>No se encontraron eventos</Text>
    }

    return (
        <Box>
            <Listado>
                {eventos.map((evento) => 
                    <Evento
                        key={evento.id}
                        evento={evento}
                    />
                    )}

            </Listado>
        </Box>
    )
}

const Listado = styled.div`
    display:  grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 1rem;
`