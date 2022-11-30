import { useEffect } from 'react'
import { useAuth, useEventoContext } from '../../hooks';

import styled from 'styled-components';
import { Box, FormControl, FormLabel, Input, Select, Textarea, useToast } from "@chakra-ui/react";

export const FormularioEvento = ({ categorias, ciudades, modalidades,  }) => {

    const { user } =  useAuth();
    const toast = useToast()
    const { handleSubmit, handleChangeDatos, evento, setEvento, formError, setFormError } = useEventoContext()
    

    useEffect(() => {
        setEvento({ ...evento, usuario: user.id });
    }, [user])
    
    if( formError ){
        toast({
            title: `Ingrese datos correctos`,
            position: 'top-right',
            isClosable: true,
            status: 'error'
        })
        
        setFormError(false)
    }
    

    return (
        <form onSubmit={ handleSubmit }>
            <Box display='flex' flexDirection={{ base: 'column', md: 'row' }} gap='2rem' justifyContent='space-evenly'>
                <Box w='100%'>
                    {/* Titulo del evento */}
                    <FormControl mb={3}>
                        <FormLabel>Titulo</FormLabel>
                        <Input
                            type="text"
                            placeholder="Titulo Evento"
                            name="titulo"
                            borderColor="whiteAlpha.300"
                            focusBorderColor="orange.500"
                            _hover={{ focusBorderColor: "orange.200" }}
                            onChange={e => {
                                setEvento({
                                    ...evento,
                                    titulo: e.target.value,
                                    slug: e.target.value.toLocaleLowerCase().replaceAll(' ', '_')
                                })
                            }}
                            value={evento.titulo}

                        />
                    </FormControl>

                    {/* Descripcion */}
                    <FormControl mb={3}>
                        <FormLabel>Descripcion</FormLabel>

                        <Textarea
                            type="text"
                            placeholder="Agrega una descripcion"
                            name="descripcion"
                            borderColor="whiteAlpha.300"
                            focusBorderColor="orange.500"
                            _hover={{ focusBorderColor: "orange.200" }}
                            onChange={e => setEvento({
                                ...evento,
                                [e.target.name]: e.target.value,
                            })}
                            // onChange={e => handleChangeDatos(e)}
                            value={evento.descripcion}
                        />
                    </FormControl>

                    <Box display='flex' flexDirection={{ base: 'column', md: 'row' }} gap='1rem'>
                        {/* Fecha */}
                        <FormControl mb={3}>
                            <FormLabel>Fecha del evento</FormLabel>

                            <Input
                                type="date"
                                placeholder="Ingresa tu correo electrónico"
                                name="fecha_evento"
                                borderColor="whiteAlpha.300"
                                focusBorderColor="orange.500"
                                _hover={{ focusBorderColor: "orange.200" }}
                                onChange={e => setEvento({
                                    ...evento,
                                    [e.target.name]: e.target.value,
                                })}
                                value={evento.fecha_evento}
                            />
                        </FormControl>

                        {/* Hora */}
                        <FormControl mb={3}>
                            <FormLabel>Hora del evento</FormLabel>

                            <Input
                                type="time"
                                placeholder="Ingresa tu correo electrónico"
                                name="hora_evento"
                                borderColor="whiteAlpha.300"
                                focusBorderColor="orange.500"
                                _hover={{ focusBorderColor: "orange.200" }}
                                onChange={e => setEvento({
                                    ...evento,
                                    [e.target.name]: e.target.value,
                                })}
                                value={evento.hora_evento}
                            />
                        </FormControl>
                    </Box>
                    {/* IMagen */}
                    <FormControl mb={3}>
                        <FormLabel>Sube una imagen</FormLabel>

                        <Input
                            type="file"
                            placeholder="Sube una imagen"
                            name="imagen_evento"
                            borderColor="whiteAlpha.300"
                            focusBorderColor="orange.500"
                            _hover={{ focusBorderColor: "orange.200" }}
                        />
                    </FormControl>


                </Box>

                <Box w='100%'>
                    {/* Categoria */}
                    <FormControl mb={3}>
                        <FormLabel>Categorias</FormLabel>
                        <Select
                            placeholder='Categorias'
                            color='white'
                            size='md'
                            maxW='xs'
                            name='categoria'
                            focusBorderColor='orange.500'
                            borderColor="whiteAlpha.300"
                            _hover={{ outline: "orange.200" }}
                            onChange={e => setEvento({
                                ...evento,
                                [e.target.name]: e.target.value,
                            })}
                            backgroundColor='black'
                        >
                            {categorias.map((categoria, index) =>
                                <Option key={index} value={`${categoria.id}`}>
                                    {categoria.descripcion}
                                </Option>
                            )}
                        </Select>
                    </FormControl>

                    {/* Modalidad */}
                    <FormControl mb={3}>
                        <FormLabel>Modalidad</FormLabel>
                        <Select
                            placeholder='Modalidades'
                            color='white'
                            size='md'
                            maxW='xs'
                            name='modalidad'
                            focusBorderColor='orange.500'
                            borderColor="whiteAlpha.300"
                            _hover={{ outline: "orange.200" }}
                            onChange={e => setEvento({
                                ...evento,
                                [e.target.name]: e.target.value,
                            })}
                            backgroundColor='black'
                        >
                            {modalidades.map((modalidad, index) =>
                                <Option key={index} value={`${modalidad.id}`}>
                                    {modalidad.descripcion}
                                </Option>
                            )}
                        </Select>

                    </FormControl>

                    {/* Localizacion */}
                    <FormControl mb={3}>
                        <FormLabel>Localizacion</FormLabel>
                        <Select
                            placeholder='Localizacion'
                            color='white'
                            size='md'
                            maxW='xs'
                            name='localizacion'
                            focusBorderColor='orange.500'
                            borderColor="whiteAlpha.300"
                            _hover={{ outline: "orange.200" }}
                            onChange={e => setEvento({
                                ...evento,
                                [e.target.name]: e.target.value,
                            })}
                            backgroundColor='black'
                        >
                            {ciudades.map((ciudad, index) =>
                                <Option key={index} value={`${ciudad.id}`}>
                                    {ciudad.nombre}
                                </Option>
                            )}
                        </Select>
                    </FormControl>

                    <FormControl mb={3}>
                        <FormLabel>Direccion</FormLabel>

                        <Textarea
                            type="text"
                            placeholder="Agrega una descripcion"
                            name="direccion"
                            borderColor="whiteAlpha.300"
                            focusBorderColor="orange.500"
                            _hover={{ focusBorderColor: "orange.200" }}
                            onChange={e => setEvento({
                                ...evento,
                                [e.target.name]: e.target.value,
                            })}
                            value={evento.direccion}
                        />
                    </FormControl>



                </Box>
            </Box>
                <button type='submit'>Registrar evento</button>
        </form>
    )
}


const Option = styled.option`
    background-color: #000000 !important;
`