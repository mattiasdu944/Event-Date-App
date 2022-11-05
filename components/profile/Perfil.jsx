import {
    Avatar, Box, Button, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Text, WrapItem
} from "@chakra-ui/react";
import { BiMap } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";

export const Perfil = ({ perfil }) => {
    return (
        <>
            <Box display='flex' flexDirection='column' >
                <Box display={{ md: 'flex' }} alignItems='center' justifyContent='center' gap='3rem' mb='3rem'>
                    <Box display='flex' alignItems='center' justifyContent='center'>
                        <WrapItem rounded='full'>
                            <Avatar size={{ base: 'xl', md: '2xl' }} name={perfil.name} src={perfil.image} />
                        </WrapItem>
                    </Box>

                    <Box textAlign={{ base: 'center', md: 'start' }}>
                        <Text textStyle='h2' fontWeight={700} mb='.5rem'>
                            {perfil.name}
                        </Text>
                        <Text color='gray.300' mb='.5rem'>
                            {perfil.email}
                        </Text>
                        {perfil.descripcion &&
                            <Accordion allowToggle my={2}>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton px='0'>
                                            <Box color='gray.300' textAlign='left' px='0'>
                                                Descripcion
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} px='0'>
                                        <Text color='gray.300' textAlign='justify' fontSize='.9rem'>
                                            {perfil.descripcion ? perfil.descripcion : 'No hay descripcion de este perfil'}
                                        </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        }

                        <Box display='flex' justifyContent={{ base: 'center', md: 'start' }} gap={7} color='gray.300'>
                            <Text display='flex' alignItems='center' gap={1}>
                                <BiMap />
                                {perfil.ciudad}
                            </Text>
                            <Text display='flex' alignItems='center' gap={1}>
                                {perfil.telefono && <><BsTelephone /> {perfil.telefono}</>}
                            </Text>
                        </Box>
                        <Button colorScheme='orange' mt={2} py={1} alignItems='center' variant='outline' width='100%'>
                            Editar Perfil
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
