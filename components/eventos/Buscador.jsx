import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

export const Buscador = ({setParam}) => {

    const [buscador, setBuscador] = useState('')
    
   
    const handleSearch = e => {
        e.preventDefault();
        setParam(`?titulo=${buscador}`)
    }

    return (
        <form onSubmit={handleSearch}>

            <InputGroup size='md' mb={10}>
                <Input
                    pr="4.5rem"
                    type='text'
                    placeholder="Buscar Evento"
                    borderColor="whiteAlpha.300"
                    focusBorderColor="orange.500"
                    _hover={{ outline: "orange.200" }}
                    value={buscador}
                    onChange={e =>  setBuscador(e.target.value)}
                />
                <InputRightElement width='4.5rem'>
                    <Button onClick={handleSearch}>
                        Buscar
                    </Button>
                </InputRightElement>
            </InputGroup>
        </form>
    )
}
