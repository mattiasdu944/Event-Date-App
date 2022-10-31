import { db } from "../../../database/db";

export default async function handler(req, res){

    console.log(req.body);
    switch( req.method ){
        case 'GET':
            return getDataUser(req, res);
    }

    // const [[user]] = await db.query("SELECT * FROM usuarios WHERE usuarios.email = ?", 'duartemattias3@gmail.com');
    // if(!user){
    //     console.log('no hay a encontrado usuario');
    // }
    

    res.status(200).json(user);
}

const getDataUser = async ( req, res ) => {
    console.log(req);
    const [[user]] = await db.query("SELECT * FROM v_usuario_perfil WHERE id_usuario = ?",6); 
    res.status(200).json(user);
    // return res.status(200).json( user )

}