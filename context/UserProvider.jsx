import { createContext, useEffect, useState } from 'react';
import { useAuth } from '../hooks';
import { usuarioApi } from "../apis/index";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const { user } = useAuth();
    const [perfil, setPerfil] = useState({})

    useEffect(() => {
      getUserProfile();
    }, [user])
    

    const getUserProfile = async () => {
        const {data} = await usuarioApi.get(`usuario/${user.id}`);
        setPerfil(data);
    }
    
    console.log(perfil);
    const getUserEvents = async () => {

    }

    

    return (
        <UserContext.Provider value={{
            perfil
        }}>
            {children}
        </UserContext.Provider>
    )
}
export { UserProvider };
export default UserContext;