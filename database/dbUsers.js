import { db } from "./db"

export const checkEmailPassword = async(mail, password) => {
    const [[user]] = await db.query("SELECT * FROM usuarios WHERE usuarios.email = ?", mail);

    //Validar que existe el usuario con los datos enviados
    if(!user){
        // throw new Error('user not found');
        return null;
    }

    //Validar la contraseña
    if( password != user.password){
        return null;
    }

    const { name, email, id } = user
    console.log('Se logro');
    return {
        id,
        name,
        email,
    }
}


export const oAuthToDbUser = async (oAuthEmail, oAuthName) => {
    const [[user]] = await db.query("SELECT * FROM usuarios WHERE usuarios.email = ?", oAuthEmail);
    console.log(user);

    if(user){
        const { name, email, id } = user
        return {
            id,
            name,
            email,
        }
    }
    const newUser = {
        email: oAuthEmail,
        name: oAuthName,
        password: '@'
    }
}