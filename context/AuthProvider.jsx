import { createContext } from 'react';
import { signIn, useSession } from 'next-auth/react';


const AuthContext = createContext();

const AuthProvider = ({children}) => {
      const {data}= useSession()
      
      // console.log(data)

      const signInWithGoogle = () => {
        signIn('google')

      }
      const signInWithCredentials = (name ,email, password , tipo) => {
          signIn('credentials', { name, email, password, tipo });
      } 
    
    return(
          <AuthContext.Provider value={{
            signInWithCredentials,
            signInWithGoogle
          }}>
               {children}
          </AuthContext.Provider>
     )
}
export { AuthProvider };
export default AuthContext;