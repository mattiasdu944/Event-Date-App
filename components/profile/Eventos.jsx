import { Box, Text } from '@chakra-ui/react'
import { BiCalendar, BiMap, BiTime } from 'react-icons/bi'

export const Eventos = ({evento}) => {


    return (
        <div className='card'>
            <style jsx>{`
                .card{
                    cursor:pointer;
                    background-image: linear-gradient(to right, rgb( 0 0 0 / .8), rgb(0 0 0 / .2)), url(${evento.image});
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center center;
                    border-radius: .5rem;
                    padding: 1rem 2rem;
                    {/* min-height: 200px; */}
                }
            `}</style>
            <Box display='flex' height='100%' gap='5rem' flexDirection='column' justifyContent='space-evenly'>
                <Box>
                    <Text textStyle='h3'>{evento.titulo}</Text>
                    <Text width={{md:'75%'}}  noOfLines={1} >{evento.descripcion}</Text>
                    <Text display='flex' alignItems='center' gap={1} color='orange.200' fontWeight={700}> <BiMap/> {evento.localizacion_evento}</Text>
                </Box>
                <Box display='flex' gap='2rem'>
                    <Text display='flex' alignItems='center' gap={1}><BiCalendar/> {evento.fecha_evento}</Text>
                    <Text display='flex' alignItems='center' gap={1}><BiTime/> {evento.hora_evento}</Text>
                </Box>
            </Box>

        </div>

    )
}
