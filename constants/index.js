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
        name: 'Eventos',
        path: '/eventos',
    },
    {
        name: 'Crear evento',
        path: '/eventos/new',
    },
]