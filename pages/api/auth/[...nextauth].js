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
                // console.log({credentials});
                // const obj={
                //     name:'Mattias',
                //     email:'correo@gmail.com',
                // }
                // if( !credentials.email ){
                //     return null;
                // }
                // if( credentials.password != '12'  ){
                //     return null;
                // }

                return await dbUsers.checkEmailPassword( credentials.email, credentials.password );
                // console.log(credentials.email, credentials.password);
                // dbUsers.checkEmailPassword( credentials.email, credentials.password)
                // return null
                 
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.JWT_SECRET,
    pages:{
        // signIn: '/auth/signin',
    },
    callbacks:{
        async jwt({token, account, user}){
            
            if( account ){
                token.accessToken = account.access_token;
                switch(  account.type ){
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
    
})