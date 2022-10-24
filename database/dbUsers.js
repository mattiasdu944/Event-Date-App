import { db } from "./db"
import bcrypt from 'bcrypt'

export const checkEmailPassword = async( names, mail, password, tipo) => {
    const [[user]] = await db.query("SELECT * FROM usuarios WHERE usuarios.email = ?", mail);

    if( tipo === "login"){
        if(!user){
            console.error('No existe el usuario')
            return null;
        }
        //Validar la contraseña
        // if( password != user.password){
        if( !bcrypt.compareSync(password, user.password) ){
            console.error('Contraseña incorrecta')
            return null;    
        }
        const { name, email, id } = user;
        return {
            id,
            name,
            email,
        }
    }
    
    if( tipo === "register" ){
        
        if(user){
            console.error('Estas credenciales ya existen')
            return null;
        }

        const passHashed = await bcrypt.hash(password,8);
        await db.query('INSERT INTO usuarios (email, name, password) VALUES (?,?,?)', [mail, names, passHashed])
        const [[newUser]] = await db.query("SELECT * FROM usuarios WHERE usuarios.email = ?", mail);
    
        const { name, email, id } = newUser
    
        return {
            id,
            name,
            email,
        } 
    }
}


export const oAuthToDbUser = async (oAuthEmail, oAuthName) => {
    const [[user]] = await db.query("SELECT * FROM usuarios WHERE usuarios.email = ?", oAuthEmail);
    
    if(user){
        const { name, email, id } = user
        return {
            id,
            name,
            email,
        }
    }
    await db.query('INSERT INTO usuarios (email, name, password) VALUES (?,?,?)', [oAuthEmail, oAuthName, '@'])
   
    const [[newUser]] = await db.query("SELECT * FROM usuarios WHERE usuarios.email = ?", oAuthEmail);
    const { name, email, id } = newUser
       
    return {
        id,
        name,
        email,
    }
}