import { useState } from "react"

import { Button, ButtonGroup, Divider, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import styled from "styled-components"

export const FormSignUp = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
        <>
            <Form>
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

                <ButtonGroup
                    display='grid'
                    gap={3}
                >
                    
                    <Button
                        backgroundColor='orange.500'
                        type="submit"
                        _hover={{ backgroundColor: 'orange.200' }}
                        _active={{ backgroundColor: 'orange.500' }}
                    >
                        Registrarse
                    </Button>
                    <Button
                        backgroundColor='transparent'
                        _hover={{ backgroundColor: 'transparent' }}
                        _active={{ backgroundColor: 'transparent' }}
                    >
                        Ya tienes una cuenta? Inicia Sesion
                    </Button>
                    <Flex alignItems='center'>
                        <Divider
                            m={0}
                            orientation='horizontal'
                            backgroundColor='whiteAlpha.300'
                            borderColor='whiteAlpha.100'
                        />
                        <Text color='whiteAlpha.300'> o </Text>
                        <Divider 
                            m={0}
                            orientation='horizontal'
                            backgroundColor='whiteAlpha.300'
                            borderColor='whiteAlpha.100'
                        />
                    </Flex>
                    <Button
                        type="submit"

                        alignItems='center'
                        gap={3}
                        color='black'
                        backgroundColor='white.500'
                        _hover={{ backgroundColor: 'white.500' }}
                        _active={{ backgroundColor: 'orange.500', color: 'white.200' }}
                    >
                        <FcGoogle/>
                        Continuar con Google
                    </Button>

                    <Button
                        type="submit"
                        alignItems='center'
                        gap={3}
                        color='black'
                        backgroundColor='white.500'
                        _hover={{ backgroundColor: 'white.500' }}
                        _active={{ backgroundColor: 'orange.500', color: 'white.200' }}
                        
                    >
                        <Text color='facebook.400'>
                            <ImFacebook2/>
                        </Text>
                        Continuar con Facebook
                    </Button>
                </ButtonGroup>
            </Form>
        </>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    
`
