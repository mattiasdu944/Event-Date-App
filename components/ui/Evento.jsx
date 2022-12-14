import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'
import { Box, Text } from '@chakra-ui/react'
import { BiCalendar, BiTime } from 'react-icons/bi'
import { formatFecha } from '../../utils/helpers'

export const Evento = ({ evento }) => {
    return (
        <Link href={`/eventos/${evento.slug}`}>   
            <Card>
                <div>
                    <Image priority src={evento.imagen_evento} alt={evento.titulo} height='200' width='350' layout='responsive' />
                </div>
                <Box display='flex' height='100%' gap='2rem' flexDirection='column' p={4}>
                    <Box>
                        <Text textStyle='h3' mb={3} fontWeight='800'>{evento.titulo}</Text>
                        <Text width={{ md: '75%' }} noOfLines={2} >{evento.descripcion}</Text>
                    </Box>
                    <Box display='flex' gap='2rem'>
                        <Text display='flex' alignItems='center' gap={1}>
                            <BiCalendar color='#FC382E'/> 
                            {formatFecha( evento.fecha_evento)}
                        </Text>
                        <Text display='flex' alignItems='center' gap={1}>
                            <BiTime color='#FC382E'/> 
                            {evento.hora_evento}
                        </Text>
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
    border: 1px solid #fefefe2e;
    background-color: #00000040;
    transition-property: transform;
    transition-duration: .3s;

    &:hover{
        transform: scale(1.05);
    }

`