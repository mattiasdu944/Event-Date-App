import Head from "next/head"

export const Layout = ({title, description, children}) => {
  return (
    <>
      <Head>
        <meta name="description" content={`Èvent Date - ${description}`} />
        <title>{`Event Date | ${title}`}</title>
      </Head>
      <main>
        {children}
      </main>
    </>
  )
}
