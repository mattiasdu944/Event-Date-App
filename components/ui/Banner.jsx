import { Box, Text } from '@chakra-ui/react'
import { formatFecha } from '../../utils/helpers';

export const Banner = ({ evento }) => {
    const {titulo, imagen_evento, fecha_evento, hora_evento} = evento;

    return (
        <>
            <style jsx>{`
                .portada{
                background-image: linear-gradient(to right, rgb( 0 0 0 / .8), rgb(0 0 0 / .4)), url(${imagen_evento});
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
                border-radius: .5rem;
                margin-bottom:5rem;
                width: 100%;
                padding: 7rem 4rem;
                }
                @media (max-width: 768px){
                .portada{
                    padding: 2rem 1rem;
                }
                }
            `}</style>

            <div className="portada">
                <Box mb='3rem' >
                    <Text 
                        textStyle='h1' mb={5}
                        textTransform='uppercase'
                        bgGradient='linear(to-r, orange.500, orange.300)'
                        bgClip='text'
                        fontWeight={800}
                        
                    >
                        Ultimo evento <br/> agregado!
                    </Text>
                    <Text textStyle='h2' mb={5}>{`${titulo}`}</Text>
                </Box>

                <Box mb={4}>
                    <Text textStyle='h3' mb={5}>{formatFecha(fecha_evento)} - {hora_evento}</Text>
                </Box>

            </div>

        </>
    )
}


