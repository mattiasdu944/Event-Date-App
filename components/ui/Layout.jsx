import { useState } from "react"

import Head from "next/head"
import { useSession } from "next-auth/react"
import { Header, Footer } from "./"

export const Layout = ({ title, description, children }) => {
  const [loading, setLoading] = useState(true)
  const { status } = useSession();

  if (status == 'authenticated') {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }

  return (
    <>
      <Head>
        <meta name="description" content={`Èvent Date - ${description}`} />
        <title>{`Event Date | ${title}`}</title>
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}
