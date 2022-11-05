import { db } from "../../../database/db";

export default async function handler(req, res){
   
    switch( req.method ){
        case 'GET':
            return getUserById(req, res) 
        default:
            return res.status(400).json({message:'Bad request'})
    }
}


const  getUserById = async (req,res) => {
    const {id} = req.query
    
    let [[user]] = await db.query("SELECT * FROM v_usuario_description WHERE id = ?", id); 
    let [eventos] = await db.query("SELECT * FROM v_usuario_evento WHERE id = ?", id); 
    if( !user ){
        return res.status(200).json(null);
    }
    if(!eventos){
        eventos = null
    }

    const usuario = {...user, eventos}

    res.status(200).json(usuario);
}