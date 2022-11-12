import Link from 'next/link';
import { useRef } from 'react'
import { useAuth } from '../../hooks';
import { avatar_links, nav_links } from '../../constants';

import { AiOutlineMenu } from "react-icons/ai";
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, List, ListItem, Text, Grid, Flex, WrapItem, Avatar, Box, Divider} from '@chakra-ui/react'
import { signOut } from 'next-auth/react';

export const DrawerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const { user } = useAuth()
    return (

        <>
            <Button ref={btnRef} onClick={onOpen} bgColor='transparent' _active={{bgColor:'transparent'}} _hover={{bgColor:'transparent'}}>
                <AiOutlineMenu />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent backdropFilter='auto' bgBlendMode='color' bgColor='blackAlpha.700' backdropBlur='5px' zIndex='10000000'>
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
                        <Grid mb={5} gap={5} alignItems='center'  justifyContent='center'>
                            <WrapItem alignItems='center' justifyContent='center'>
                                <Avatar size='lg' name={user.name} src={user.image} />
                            </WrapItem>
                            <Box textAlign='center'>
                                <Text fontWeight={700}>{user.name}</Text>
                                <Text>{user.email}</Text>
                            </Box>
                        </Grid>
                        <List>
                            <Grid gap={3}>
                                {nav_links.map(enlace =>
                                    <Link href={enlace.path} key={enlace.path}>
                                        <a>{enlace.name}</a>
                                    </Link>
                                )}
                            </Grid>
                            <Divider my={4}/>
                            <Grid gap={3}>
                                {avatar_links.map(enlace =>
                                    <Link href={enlace.path} fontSize='lg' key={enlace.path}>
                                        <a >
                                            {enlace.name}
                                        </a>
                                    </Link>
                                )}
                            </Grid>
                            <ListItem mt={5}>
                                <Flex gap={4}>

                                    <Button color='orange.500' variant='link' onClick={signOut}>
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
