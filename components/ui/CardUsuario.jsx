import { Avatar, Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

export const CardUsuario = ({ usuario }) => {
    return (
        <CardContainer>
            <Link href={`/profile/${usuario.email}`}>
                <Box display='flex' cursor='pointer' mb={5} alignItems='center' gap={5}>
                    <Avatar  name={usuario.name} src={usuario.image} alt={usuario.name} size='sm'/>
                    <Box>
                        <Text>{usuario.name}</Text>
                        <Text>{usuario.email}</Text>
                    </Box>
                </Box>       
            </Link>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    background-color: #0000007a;
    width: 100%;
    border-radius: .5rem;
    padding: .5rem 1rem;
    transition-property: transform;
    transition-duration: .3s;

    &:hover{
        transform: scale(1.05);
    }
`