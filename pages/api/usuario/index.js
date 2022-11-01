import { db } from "../../../database/db";

export default async function handler(req, res){
    switch( req.method ){
        case 'GET':
            return getDataUser(req, res);
        default:
            return res.status(400).json({message:'Bad request'})
    }
}

const getDataUser = async ( req, res ) => {
    // console.log(req);
    const [[user]] = await db.query("SELECT * FROM v_usuario_perfil WHERE id_usuario = ?",6); 
    res.status(200).json(user);

}