import { db } from "../../../database/db";

export default async function handler(req, res){
   
    switch( req.method ){
        case 'GET':
            return getAllEvents(req, res) 
        default:
            return res.status(400).json({message:'Bad request'})
    }
}


//VER TODOS LOS EVENTOS CON Y SIN CATEGORIA EN LAS CARDS DEL FRONTEND
const getAllEvents = async (req, res) => {

    const { category, titulo } = req.query;

    if( category ){
        const [eventos] = await db.query('SELECT * from v_evento_categoria WHERE categoria = ?', category) 
        return res.status(200).json(eventos)     
    }

    if( titulo ){
        const [eventos] = await db.query(`SELECT * from v_evento_categoria WHERE titulo LIKE ?`, [`%${titulo}%`]) 
        return res.status(200).json(eventos)     
    }

    const [eventos] = await db.query('SELECT * from v_evento_categoria ORDER BY id DESC;') 

    return res.status(200).json(eventos)   
}

