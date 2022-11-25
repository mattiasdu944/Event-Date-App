import { db } from "./db"
import bcrypt from 'bcrypt'


export const getDataUser = async (id) => {
    let [[user]] = await db.query("SELECT * FROM v_usuario_description WHERE id = ?", id);
    let [eventos] = await db.query("SELECT * FROM v_usuario_evento WHERE id = ? ORDER BY id DESC", id); 
    let [seguidores] = await db.query("SELECT * FROM v_usuario_seguidores WHERE seguido = ?", id);
    let [seguidos] = await db.query("SELECT * FROM v_usuario_seguidos WHERE seguidor = ?", id);

    if( !seguidores )   { seguidores = null }
    if( !seguidos )     { seguidos = null }


    if( !user ){
        return null;    
    }

    if(!eventos){
        eventos = []
    }
    const usuario = {...user, eventos, seguidores, seguidos}


    return usuario;
}


export const checkEmailPassword = async( names, mail, password, tipo) => {
    const [[user]] = await db.query("SELECT * FROM usuarios WHERE usuarios.email = ?", mail);

    if( tipo === "login"){
        if(!user){
            console.error('No existe el usuario')
            return null;
        }
        //Validar la contraseña
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
            return null;
        }
        const passHashed = await bcrypt.hash(password,8);

        await db.query('INSERT INTO usuarios (email, name, password, image) VALUES (?,?,?,?)', [mail, names, passHashed,''])
        const [[newUser]] = await db.query("SELECT * FROM usuarios WHERE usuarios.email = ?", mail);
        const { name, email, id } = newUser
        await db.query('INSERT INTO data_usuario (usuario, descripcion, telefono, ciudad) VALUES (?,?,?,?)', [id, '', '',1])
        return {
            id,
            name,
            email,
        } 
    }
}


export const oAuthToDbUser = async (oAuthEmail, oAuthName, oAuthImage ) => {
    const [[user]] = await db.query("SELECT * FROM usuarios WHERE usuarios.email = ?", oAuthEmail);
    
    if(user){
        const { name, email, id, image } = user
        return {
            id,
            name,
            email,
            image,
        }
    }
    
    await db.query('INSERT INTO usuarios (email, name, password, image) VALUES (?,?,?,?)', [oAuthEmail, oAuthName, '@', oAuthImage])
    const [[newUser]] = await db.query("SELECT * FROM usuarios WHERE usuarios.email = ?", oAuthEmail);
    const { name, email, id, image } = newUser
    await db.query('INSERT INTO data_usuario (usuario, descripcion, telefono, ciudad) VALUES (?,?,?,?)', [id, '', '',1])

       
    return {
        id,
        name,
        email,
        image,
    }
}