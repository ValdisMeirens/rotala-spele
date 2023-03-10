import Grafiks from "@/components/grafiks/Grafiks";
import Head from "next/head";
import { server } from "@/components/config";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grafiks grafiks={props.data} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/grafiks`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
