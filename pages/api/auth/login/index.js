import { db } from "../../../../database/db";
import bcrypt from 'bcrypt'


export default async function handler(req, res){
   
    switch( req.method ){
        case 'GET':
            return res.status(200).json({message:'Bad request'})
    
        case 'POST':
            return authenticateUser(req, res) 
        default:
            return res.status(400).json({message:'Bad request'})
    }
}


const authenticateUser = async (req, res) => {
    const {usuario, tipo} = await req.body
    
    
    const [[user]] = await db.query("SELECT * FROM usuarios WHERE usuarios.email = ?", usuario.email);
    
    if( tipo === "login"){
        if(!user){
            console.error('No existe el usuario')
            return res.status(400).json({mssg:'No existe el usuario'});
        }
        //Validar la contraseña
        if( !bcrypt.compareSync(usuario.password, user.password) ){
            console.error('Contraseña incorrecta')
            return res.status(400).json({mssg: 'Contraseña incorrecta'});
        }

        let [[dataUser]] = await db.query("SELECT * FROM v_usuario_description WHERE id = ?", user.id);
        let [eventos] = await db.query("SELECT * FROM v_usuario_evento WHERE id = ?", user.id); 
        const newUsuario = {...dataUser, eventos}
        return res.status(200).json(newUsuario);
    }

    if( tipo === "register" ){
        
        if(user){
            return res.status(400).json({mssg:'Este usuario ya se encuentra registrado'});
        }
        
        const { name, email, password, image } = usuario;
        const passHashed = await bcrypt.hash(password,8);
        
        await db.query('INSERT INTO usuarios (email, name, password, image) VALUES (?,?,?,?)', [email, name, passHashed, image ? image : ''])

        const [[newUser]] = await db.query("SELECT * FROM usuarios WHERE usuarios.email = ?", email);
        
        const { name:{names}, email:{mail}, id } = newUser
        await db.query('INSERT INTO data_usuario (usuario, descripcion, telefono, ciudad) VALUES (?,?,?,?)', [id, '', '',1])
        return res.status(200).json(newUser);

    }
    
}



