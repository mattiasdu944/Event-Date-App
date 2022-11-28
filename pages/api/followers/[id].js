import { db } from "../../../database/db";

export default async function handler(req, res){
   
    switch( req.method ){

        
        case 'DELETE':
            return deleteFollow(req, res) 

        default:
            return res.status(400).json({message:'Bad request'})
    }
}

const deleteFollow = async (req,res) => {
    const {id} = req.query

    let result = await db.query("DELETE FROM seguidores WHERE id= ?", id);
    console.log(result);
    return res.status(200).json({message: `Se elimino el de la tabla de la seguidores con id = ${id}`});

}
