import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [iUser, setiUser] = useState()
    const {data, status} = useSession();
    const router = useRouter();
    
    useEffect(() => {
      if(status === 'authenticated'){
        console.log(data);
      }
    }, [status, data])
    
    

    return(
          <AuthContext.Provider value={{}}>
               {children}
          </AuthContext.Provider>
     )
}
export { AuthProvider };
export default AuthContext;