import { Evento } from '../ui'

import { Box } from '@chakra-ui/react'
import styled from 'styled-components'

export const Listado = ({eventos}) => {
  
    return (
        <Box>
            <Lista>
                {eventos.map((evento) => 
                    <Evento
                        key={evento.id}
                        evento={evento}
                    />
                )}

            </Lista>
        </Box>
    )
    
}


const Lista = styled.div`
    display:  grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 1rem;
`