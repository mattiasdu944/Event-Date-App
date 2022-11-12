import Link from 'next/link'
import { signOut } from 'next-auth/react';
import { useAuth } from "../../hooks";
import { avatar_links } from '../../constants';

import { Avatar, Menu, MenuButton, MenuItem, MenuList, Portal, Text, WrapItem } from '@chakra-ui/react'
import { BiExit } from "react-icons/bi";

export const NavAvatar = () => {
    const { user } = useAuth();
    return (
        <Menu>
            <MenuButton bgColor='orange.500' borderRadius='full'>
                <WrapItem>
                    <Avatar size='sm' name={user.name} src={user.image} />
                </WrapItem>
            </MenuButton>
            <Portal>
                <MenuList bgColor='blackAlpha.800' zIndex='1000'>
                    {avatar_links.map(enlace =>
                            <Link href={enlace.path} key={enlace.path}>
                                <MenuItem fontSize='lg'  _hover={{bg:'#080910'}} _active={{bg:'#080910'}}>
                                        <Text display='flex' alignItems='center' gap={3}>
                                            {enlace.icon} {enlace.name}
                                        </Text>
                                </MenuItem>
                            </Link>
                    )}
                    <MenuItem color='orange.500' gap={3} fontWeight={700} onClick={signOut}>
                        <BiExit/> Cerrar Sesion
                    </MenuItem>
                </MenuList>
            </Portal>
        </Menu>
    )
}
