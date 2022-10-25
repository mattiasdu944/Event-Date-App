import { createContext, useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';

import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const toast = useToast();
  const router = useRouter();
  const { data, status } = useSession();
  const [user, setUser] = useState({name:'', email:'', id:'', image:''});
  const [errorUser, setErrorUser] = useState(false)



  useEffect(() => {
    if( status === 'authenticated' ){
      setUser(data.user)
    }
  }, [status])
  

  const signInWithGoogle = () => {
    signIn('google')

  }
  const signInWithCredentials = (name, email, password, tipo) => {
    signIn('credentials', { name, email, password, tipo });
  }

  const errorUserDb = ( path ) =>{ 
    if( path ){
      toast({
        title:'Error en las credenciales',
        description:'Revise los datos ingresados',
        status: "error",
        position: "top-right",
        isClosable: true,
        duration: 3000,
      });
    }
  }

  return (
    <AuthContext.Provider value={{
      signInWithCredentials,
      signInWithGoogle,
      errorUserDb,
      user,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
export { AuthProvider };
export default AuthContext;