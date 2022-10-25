import { useRef } from 'react'
import { avatar_links } from '../../constants';

import { AiOutlineMenu } from "react-icons/ai";
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, List, ListItem, Text, Grid, Flex, WrapItem, Avatar, Box} from '@chakra-ui/react'

export const DrawerMenu = () => {
    
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (

        <>
            <Button ref={btnRef} onClick={onOpen}>
                <AiOutlineMenu />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent backdropFilter='auto' bgBlendMode='color' bgColor='blackAlpha.700' backdropBlur='5px'>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Text
                            fontWeight={800}
                            bgGradient='linear(to-r, orange.500 ,orange.200)'
                            bgClip='text'
                            fontSize='2xl'
                        >
                            Event Date
                        </Text>
                    </DrawerHeader>

                    <DrawerBody>
                        <Flex mb={5} gap={5} alignItems='center' justifyContent='center'>
                            <WrapItem>
                                <Avatar size='md' name='Kola Tioluwani' src='https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                            </WrapItem>
                            <Box>
                                <Text fontWeight={700}>Name Name2 Lastname Lastname2</Text>
                                <Text>correo@example.com</Text>
                            </Box>
                        </Flex>
                        <List>
                            <Grid gap={3}>
                                {avatar_links.map(enlace =>
                                    <ListItem fontSize='lg' key={enlace.path}>
                                        <a href={enlace.path}>{enlace.name}</a>
                                    </ListItem>
                                )}
                            </Grid>
                            <ListItem mt={5}>
                                <Flex gap={4}>

                                    <Button color='orange.500' variant='link'>
                                        Cerrar Sesion
                                    </Button>
                                </Flex>
                            </ListItem>
                        </List>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
