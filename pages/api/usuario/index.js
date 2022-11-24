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
    const [usuarios] = await db.query("SELECT * FROM usuarios"); 
    res.status(200).json(usuarios);

}