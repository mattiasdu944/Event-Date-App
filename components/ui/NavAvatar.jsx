import Link from 'next/link'

import { Avatar, Menu, MenuButton, MenuItem, MenuList, Portal, WrapItem } from '@chakra-ui/react'
import { avatar_links } from '../../constants';


export const NavAvatar = () => {
    return (
        <Menu>
            <MenuButton>
                <WrapItem>
                    <Avatar size='sm' name='Mattias Dioluwani' src='https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
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
                        <MenuItem color='orange.500' fontWeight={700}>
                            Cerrar Sesion
                        </MenuItem>
                </MenuList>
            </Portal>
        </Menu>
  )
}
