import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

export const TicketCard = ({evento}) => {
    const {ticket, fecha_evento, hora_evento } = evento

    console.log(ticket)


    return (
        <Tickets>
            <Box mb={4}>
                <Text color='black' fontWeight={800} fontSize='xl'>Fecha y Hora</Text>
                <Text color='black' fontWeight={500}>{`${fecha_evento}`} - {`${hora_evento}`}</Text>

            </Box>

            <Box>
                <Text color='black' fontWeight={800} fontSize='xl'>Tickets disponibles</Text>
                <Text color='black' fontWeight={800} fontSize='xl'>

                    {ticket.length > 0

                        ? <Text color='black' fontWeight={500} fontSize='md'>
                            {ticket.map(tick =>
                                <Box display='flex' gap={2} key={tick.descripcion}>
                                    <Text fontWeight={600}>
                                        {`${tick.descripcion}`}:
                                    </Text>
                                    <Text>
                                        {`${tick.precio}`}$

                                    </Text>
                                </Box>
                            )}
                        </Text>
                        : <Text color='black' fontWeight={500} fontSize='md'>No se cuenta con esta informacion</Text>

                    }
                </Text>
            </Box>
        </Tickets>
    )
}


const Tickets = styled.div`
    padding: 2rem;
    border-radius: .75rem;
    background-color: #fefefe;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;

`