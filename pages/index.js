import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard/app");
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Cometwallet | IG</title>
        <meta
          name="description"
          content="Sample wallet dashboard for cometlabs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>
    </div>
  );
}
