import { useState } from "react"

import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import styled from "styled-components"

export const FormSignUp = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
        <Section>
            <form>
                <FormControl mb={3}>
                    <FormLabel>Nombre</FormLabel>
                    <Input
                        name="name"
                        type="text"
                        placeholder="Ingresa tu nombre"
                        borderColor='whiteAlpha.300'
                        focusBorderColor="orange.500"
                        _hover={{ focusBorderColor: 'orange.200' }}
                    />
                </FormControl>

                <FormControl mb={3}>
                    <FormLabel>Apellido/s</FormLabel>

                    <Input
                        name="lastname"
                        placeholder="Ingresa tu apellido"
                        type="text"
                        borderColor='whiteAlpha.300'
                        focusBorderColor="orange.500"
                        _hover={{ focusBorderColor: 'orange.200' }}
                    />
                </FormControl>

                <FormControl mb={3}>
                    <FormLabel>Correo Electronico</FormLabel>

                    <Input
                        type="email"
                        placeholder="Ingresa tu correo electrónico"
                        name="email"
                        borderColor='whiteAlpha.300'
                        focusBorderColor="orange.500"
                        _hover={{ focusBorderColor: 'orange.200' }}
                    />
                </FormControl>

                <FormLabel>Contraseña</FormLabel>
                <InputGroup size='md' mb={3}>
                    <FormControl>

                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                            borderColor='whiteAlpha.300'
                            focusBorderColor="orange.500"
                            _hover={{ outline: 'orange.200' }}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button
                                h='1.75rem'
                                size='md'
                                backgroundColor='transparent'
                                _hover={{ backgroundColor: 'transparent' }}
                                _active={{ backgroundColor: 'transparent' }}
                                onClick={handleClick}
                            >
                                {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </Button>
                        </InputRightElement>
                    </FormControl>
                </InputGroup>
            </form>
        </Section>
    )
}

const Section = styled.section`
`