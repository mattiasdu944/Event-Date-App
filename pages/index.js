import { signOut } from "next-auth/react"
import { Layout } from '../components/ui/Layout'

const HomePage = () => {

  return (
     <Layout title='Inicio' description='Ultimas noticias sobre los eventos'>
       Home Screen
       <button onClick={() => signOut()}>Sign out</button>
     </Layout>
   )
}

export default HomePage

// export async function getServerSideProps(context) {
//   const session =  await getSession(context);
//   if(!session){
//     console.log('no hay session')
//     return{
//       props:{
        
//       },
//       redirect:{
//         destination:'/auth/signin'
//       }
//     }
//   }
//   console.log(session);
//   return {
//     props: {session}, // will be passed to the page component as props
//   }
// }