import NextAuth from "next-auth/next"
import Credentials from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { dbUsers } from "../../../database"


export default NextAuth({
    providers: [
        Credentials({
            name:'Custom Login',
            credentials:{
                email: {label:'Email', type:'email', placeholder:'Ingresa tu correo'},
                password: {label:'Contraseña', type:'password', placeholder:'Ingresa una contraseña'},
            },
            async authorize(credentials){
                return await dbUsers.checkEmailPassword( credentials.email, credentials.password ); 
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages:{
        // signIn: '/auth/signin',
    },
    callbacks:{
        async jwt({token, account, user}){
            
            if( account ){
                token.accessToken = account.access_token;

                switch(  account.type ){

                    case 'oauth':
                        // token.user = await dbUsers.oAuthToDbUser( user.email , user.name );
                        break;
                
                    case 'credentials':
                        token.user = user;
                        break;
                }
            }

            return token;
        },

        async session({session,token,user}){

            session.accessToken = token.access_token;
            session.user = token.user;

            return session;
        }
    },
    
    secret: process.env.JWT_SECRET,
    
})