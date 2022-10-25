import Link from 'next/link'
import { useAuth } from "../../hooks";

import { Avatar, Menu, MenuButton, MenuItem, MenuList, Portal, WrapItem } from '@chakra-ui/react'
import { avatar_links } from '../../constants';
import { signOut } from 'next-auth/react';


export const NavAvatar = () => {
    const { user } = useAuth();

    return (
        <Menu>
            <MenuButton bgColor='orange.500' borderRadius='full'>
                <WrapItem>
                    <Avatar size='sm' name={user.name} src={user.image != '' ? user.image :'https://bit.ly/broken-link'} />
                </WrapItem>
            </MenuButton>
            <Portal>
                <MenuList bgColor='blackAlpha.800'>
                        {
                            avatar_links.map(link =>          
                                <MenuItem key={link.path}>
                                    <Link href={link.path}>
                                        {link.name}
                                    </Link>
                                </MenuItem>
                            )
                        }
                        <MenuItem color='orange.500' fontWeight={700} onClick={signOut}>
                            Cerrar Sesion
                        </MenuItem>
                </MenuList>
            </Portal>
        </Menu>
  )
}
