
import { Select, Text } from '@chakra-ui/react'
import styled from 'styled-components'

export const SelectCategorias = ({categorias, setParam, param}) => {
    return (
        <>
            <Select 
                placeholder='Categorias' 
                color='white'
                size='md' 
                maxW='xs' 
                focusBorderColor='orange.500'                     
                borderColor="whiteAlpha.300"
                _hover={{ outline: "orange.200" }} 
                onChange={e => setParam(e.target.value)}
                backgroundColor='black'
            >
                {categorias.map( (categoria, index) =>  
                    <Option key={index} value={`${categoria.descripcion}`}>
                        {categoria.descripcion}
                    </Option>
                )}
            </Select>
        </>
    )
}


const Option = styled.option`
    background-color: #000000 !important;
`