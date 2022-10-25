import Head from "next/head"
import { Header } from "./Header"

export const Layout = ({title, description, children}) => {
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
