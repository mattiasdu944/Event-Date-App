import { db } from "../../../database/db";

export default async function handler(req, res){
   
    switch( req.method ){
        case 'POST':
            return addFollow(req, res) 
    
        default:
            return res.status(400).json({message:'Bad request'})
    }
}


const addFollow = async (req, res) => {
    const {seguido, seguidor} = await req.body

    const result = await db.query('INSERT INTO seguidores (seguido, seguidor) VALUES (?,?)', [seguido, seguidor])

    return res.status(200).json({message: ` ${result}`});

}