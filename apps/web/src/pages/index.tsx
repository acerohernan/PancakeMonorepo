import Head from "next/head";
import { Button, Flex, IconButton, LogoIcon } from "@acerohernan/pancakeui";

export default function Home() {
  return (
    <>
      <Head>
        <title>Acero&apos;s Pancake</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Web</h1>
        <Flex alignItems="center" style={{ gap: "10px" }}>
          <Button label="Button">Click here</Button>
          <IconButton>
            <LogoIcon spin />
          </IconButton>
        </Flex>
      </main>
    </>
  );
}