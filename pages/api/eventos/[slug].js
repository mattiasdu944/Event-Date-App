import { db } from "../../../database/db";

export default async function handler(req, res){
   
    switch( req.method ){
        case 'GET':
            return getEventBySlug(req, res);
        
        
        default:
            return res.status(400).json({message:'Bad request'})
    }
}

const getEventBySlug = async (req, res) => {
    const { slug } = req.query

    const [[data]] = await db.query('SELECT * from v_data_evento WHERE slug = ?', slug) 
    if(!data){
        return res.status(400).json({message:'Evento no encontrado'})

    }
    
    const [ticket] = await db.query('SELECT t.descripcion, t.precio from ticket as t WHERE t.evento = ?', data.event_id)
    const evento = {...data, ticket}

    return res.status(200).json(evento)
}