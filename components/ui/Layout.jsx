import Head from "next/head"
import { useSession } from "next-auth/react"
import { Header,Spinner } from "./"

export const Layout = ({title, description, children}) => {
    const {status} = useSession();

    if (status != 'authenticated'){
      return <Spinner/>
    }

    return (

      <>
        <Head>
          <meta name="description" content={`Èvent Date - ${description}`} />
          <title>{`Event Date | ${title}`}</title>
        </Head>
        <Header/>
        <main>
          {children} 

        </main>
      </>
    )
}
