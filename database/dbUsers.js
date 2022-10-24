import { db } from "./db"

export const checkEmailPassword = async(mail, password) => {
    const [[user]] = await db.query("SELECT * FROM usuarios WHERE usuarios.email = ?", mail);


    if(!user){
        // throw new Error('user not found');

        return null;
    }
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
