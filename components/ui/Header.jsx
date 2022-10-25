import { nav_links } from '../../constants';
import { DrawerMenu, NavAvatar } from './';
import { FiSearch } from "react-icons/fi";

import { Box, Container, Flex, IconButton, Input, InputGroup, InputRightElement, List, ListItem, Text } from '@chakra-ui/react'
import styled from 'styled-components';


export const Header = () => {
  return (
    <header>
        <Nav>
            <Box backdropFilter='auto' backdropBlur='8px'>
                <Container maxW='container.lg' py={3}>
                    <Flex justifyContent='space-between' alignItems='center'>
                        <Text 
                            display={{ base: 'none', md: 'block'}}
                            fontWeight={800}   
                            bgGradient='linear(to-l,  orange.500, orange.200)'
                            bgClip='text'
                            fontSize='2xl'
                        >
                            Event Date
                        </Text>
                        <InputGroup width='-webkit-max-content'>
                            <InputRightElement
                                children={
                                    <IconButton>
                                        <FiSearch/>

                                    </IconButton>
                                }
                            />

                            <Input
                                type="text"
                                placeholder="Realiza una busqueda"
                                borderColor='whiteAlpha.300'
                                focusBorderColor="orange.500"
                                _hover={{ focusBorderColor: 'orange.200' }}
                                width='-webkit-max-content'
                            />
                        </InputGroup>
                        <List display={{ base: 'none', md: 'block'}}>
                            <Flex gap={5}>
                                {nav_links.map(enlace => 
                                    <ListItem key={enlace.path}>
                                        <a href={enlace.path}>{enlace.name}</a>
                                    </ListItem>
                                )}
                            </Flex>
                        </List>

                        <Flex display={{ base: 'none', md: 'block'}} gap={5} >
                            <NavAvatar/>
                        </Flex>
                        <Box display={{ md: 'none'}}>
                            <DrawerMenu/>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </Nav>
    </header>
  )
}

const Nav = styled.nav`
    width: 100%;
    position: fixed;
    background-color: #00000084;
    border-bottom:1px solid #fefefe2e;
`;