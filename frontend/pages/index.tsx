import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Hero */}
        <section>
          <div>
            <h1>Welcome to OcOsu</h1>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
