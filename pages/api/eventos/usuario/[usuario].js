import { db } from "../../../../database/db";

export default async function handler(req, res){
   
    switch( req.method ){
        case 'GET':
            return getEventByUsuario(req, res);
        
        
        default:
            return res.status(400).json({message:'Bad request'})
    }
}


const getEventByUsuario = async (req, res) => {
    const { usuario } = req.query
    const [eventos] = await db.query('SELECT * from v_usuario_evento WHERE id = ?', usuario)   
    if(!eventos){
        return res.status(400).json({message:'Evento no encontrado'})
    }
    return res.status(200).json(eventos)
}