import { getSession } from 'next-auth/react'

const HomeScreen = () => {


  return (
    <div>HomeScreen</div>
  )
}

export default HomeScreen

export const getServerSideProps = async (context) => {
     const session = await getSession(context)

     return{
          props:{
              session
          }
     }
}