import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'
import { Box, Text } from '@chakra-ui/react'
import { BiCalendar, BiMap, BiTime } from 'react-icons/bi'

export const Evento = ({ evento }) => {
    return (
        <Link href={evento.slug}>   
            <Card>
                <div>
                    <Image src={evento.image} alt={evento.titulo} height='200' width='300' layout='responsive' />
                </div>
                <Box display='flex' height='100%' gap='2rem' flexDirection='column' p={4}>
                    <Box>
                        <Text textStyle='h3'>{evento.titulo}</Text>
                        <Text width={{ md: '75%' }} noOfLines={2} >{evento.descripcion}</Text>
                        <Text display='flex' alignItems='center' gap={1} color='orange.200' fontWeight={700}> <BiMap /> {evento.localizacion_evento}</Text>
                    </Box>
                    <Box display='flex' gap='2rem'>
                        <Text display='flex' alignItems='center' gap={1}><BiCalendar /> {evento.fecha_evento}</Text>
                        <Text display='flex' alignItems='center' gap={1}><BiTime /> {evento.hora_evento}</Text>
                    </Box>
                </Box>
            </Card>
        </Link>

    )
}

const Card = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: .25rem;
    gap: 1rem;
    backdrop-filter: blur(8px);
    border: solid #fefefe2e;
    background-color: #00000040;
    transition-property: transform;
    transition-duration: .3s;

    &:hover{
        transform: scale(1.05);
    }
`