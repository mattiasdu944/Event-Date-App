import React from 'react'

import { Box, Text } from '@chakra-ui/react'
import styled from 'styled-components'

export const BarCategorias = ({ categorias, setParam }) => {
    
    return (
        <Box>
            <Text textStyle='h3' mb={5}>Categorias</Text>
            <ListadoCategoria>
                {categorias.map( (categoria, index) => 
                    <Categoria 
                        key={index} 
                        size='sm'
                        onClick={() => setParam(`?category=${categoria.descripcion}`)}
                    >
                        {categoria.descripcion}
                    </Categoria>
                )}
            </ListadoCategoria>
        </Box>
    )
}


const ListadoCategoria = styled.div`
    display: grid;
    gap: 1rem;
`

const Categoria = styled.div`
    cursor: pointer;
    padding: .25rem .5rem;
    width: max-content;
    border-radius: .25rem;
    
    &:hover{
        background-color: #000000c8;
        transition: all .3s ease-in-out;
        
    }

`