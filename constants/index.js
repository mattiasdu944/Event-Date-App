import { BiUser,BiCog,BiBell } from "react-icons/bi";
export const avatar_links= [
    {
        name: 'Perfil',
        path: '/profile',
        icon: <BiUser/>
    },
    {
        name: 'Notificaciones',
        path: '/notificaciones',
        icon: <BiBell/>
    },
    {
        name: 'Configuracion',
        path: '/configuracion',
        icon: <BiCog/>
    }, 
]

export const nav_links = [
    {
        name: 'Inicio',
        path: '/',
    },
    {
        name: 'Seguidos',
        path: '#seguidos',
    },
    {
        name: 'Favoritos',
        path: '#favoritos',
    },
    {
        name: 'Crear evento',
        path: '#crear-evento',
    },
]