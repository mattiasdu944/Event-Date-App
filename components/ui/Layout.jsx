import Head from "next/head"
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const Layout = ({title, description, children}) => {
  const {data} = useSession();
  const router = useRouter();

  if(data === null){
    router.push('/auth/signin')
    return;
  }

  if(data == undefined){
    return;
  }

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
