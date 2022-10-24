import { db } from "../../../database/db";

export default async function handler(req, res){
    const [[user]] = await db.query("SELECT * FROM usuarios WHERE usuarios.email = ?", 'duartemattias3@gmail.com');
    if(!user){
        console.log('no hay a encontrado usuario');
    }

    res.status(200).json(user);
}