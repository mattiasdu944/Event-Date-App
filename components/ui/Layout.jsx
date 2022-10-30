import Head from "next/head"
import { useSession } from "next-auth/react"
import { Header, Spinner } from "./"
import { useState } from "react"

export const Layout = ({ title, description, children }) => {
  const [loading, setLoading] = useState(true)
  const { status } = useSession();


  if (status != 'authenticated') {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }

  return (

    <>
      <Head>
        <meta name="description" content={`Èvent Date - ${description}`} />
        <title>{`Event Date | ${title}`}</title>
      </Head>
        {loading 
        ? <Spinner/> 
        : <>
            <Header />
            <main>
              {children}
            </main>
          </>
        }

    </>
  )
}
