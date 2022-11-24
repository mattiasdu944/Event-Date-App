
import { Select, Text } from '@chakra-ui/react'

export const SelectCategorias = ({categorias, setParam, param}) => {
    return (
        <>
            <Text textStyle='h3' mb={5}>Categorias{param ? `: ${param}` : ''}</Text>
            <Select placeholder='Categorias' size='md' maxW='xs' focusBorderColor='orange.500' onChange={e => setParam(e.target.value)}>
                {categorias.map( (categoria, index) =>  
                    <option key={index} value={`${categoria.descripcion}`}>
                        {categoria.descripcion}
                    </option>
                )}
            </Select>
        </>
    )
}
