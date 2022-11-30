import { db } from "./db"


export const getAllEvents = async () => {
    const [eventos] = await db.query('SELECT * from v_evento_categoria ORDER BY id DESC;') 

    return eventos
}

export const getEventBySlug = async ( slug ) => {

    const [[data]] = await db.query('SELECT * from v_data_evento WHERE slug = ?', slug) 

    if(!data){
        return null
    }
    
    const [ticket] = await db.query('SELECT t.descripcion, t.precio from ticket as t WHERE t.evento = ?', data.id)

    const [[tempUser]] = await db.query('SELECT * from usuarios WHERE id = ?', data.usuario)
    const {id, name, email, image} = tempUser;
    const evento = {...data, ticket, user:{id, name, email, image}}

    return JSON.parse( JSON.stringify( evento ) );

}


export const getAllSlugEvents = async () => {
    const [slugs] = await db.query('SELECT slug from v_data_evento');
    return slugs;
}


export const getLocalizedEvent = async () => {
    const [ciudades] = await db.query('select id, nombre from ciudad');
    return ciudades;
}

export const getModalidadEvent = async () => {
    const [modalidades] = await db.query('select * from modalidad_evento');
    return modalidades;
}