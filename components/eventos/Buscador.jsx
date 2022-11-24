import { useState } from 'react'
import { useRouter } from 'next/router'

import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

export const Buscador = () => {
    const router = useRouter();
    const [buscador, setBuscador] = useState('')
   
    const handleSearch = e => {
        e.preventDefault();

        if(buscador.trim() === ''){
            return;
        }

        router.push(`/search/${buscador}`)
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
                    <Button onClick={handleSearch} bgColor='#ffffff2b' _hover={{bgColor:'#ffffff2b'}} _active={{bgColor:'transparent'}}>
                        Buscar
                    </Button>
                </InputRightElement>
            </InputGroup>
        </form>
    )
}
