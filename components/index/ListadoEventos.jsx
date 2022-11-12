import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import styled from 'styled-components'
import { Evento } from '../ui';

export const ListadoEventos = ({eventos}) => {
    console.log(eventos);

    return (
        <>
            <Link href='/eventos'>
                <a cursor='pointer' color='orange.200' fontWeight={600}>Ver todos los eventos</a>
            </Link>
            <Listado>
                {eventos.map((evento) => 
                    <Evento
                        key={evento.id}
                        evento={evento}
                    />
                    )}

            </Listado>
        </>
    )
}

const Listado = styled.div`
    display:  grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 1rem;
`