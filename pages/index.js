import { getSession, signOut } from "next-auth/react"
import { Layout } from '../components/ui/Layout'

const HomePage = () => {

  return (
     <Layout title='Inicio' description='Ultimas noticias y novedades de eventos'>
       Home Screen
       <button onClick={() => signOut()}>Sign out</button>
     </Layout>
   )
}

export default HomePage

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if( !session ){
    return{
      redirect:{
        destination:'/auth/login'
      }
    }
  }
  return {
    props: {}, 
  }
}