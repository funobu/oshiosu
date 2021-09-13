import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = ({ user }: any) => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero */}
      <section className="relative flex justify-center items-center h-screen bg-yellow-300">
        <div>
          <h1 className="text-center text-4xl mb-2">
            Welcome to <span className="text-white">OcOsu</span>
          </h1>

          <Link href="http://localhost:8000/auth">
            <a className="block w-max bg-white rounded-md px-6 py-2">Login</a>
          </Link>
        </div>
      </section>

      <main className="container mx-auto">
        {/* 投稿フォーム */}
        <section className="py-32 text-center">
          <h2 className="text-4xl mb-4">Share your Oc!</h2>
          <form action="" className="max-w-2xl mx-auto">
            <textarea
              name="body"
              placeholder="Write your Oc detail"
              className="block resize-y w-full h-32 bg-white rounded-2xl shadow-lg outline-none px-8 py-4 mb-8"
            ></textarea>
            <input type="file" className="block mb-4" />
            <button
              type="submit"
              className="block mx-auto font-semibold bg-yellow-400 text-white px-16 py-3 rounded-xl shadow-lg"
            >
              Share
            </button>
          </form>
        </section>

        {/* 投稿一覧 */}
        <section>
          <h2 className="text-4xl text-center mb-8">Timeline</h2>
          {[...Array(4)].map((post, postIdx) => {
            return (
              <div
                key={postIdx}
                className="bg-white px-8 py-8 rounded-2xl shadow-xl mb-10"
              >
                <img
                  src="https://via.placeholder.com/700x500.png?text=This+is+placeholder+image."
                  className="mb-8"
                />
                <span className="block text-2xl font-semibold text-yellow-600 mb-4">
                  投稿タイトル
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  in velit id nunc dignissim mattis et in justo. Aliquam et
                  gravida augue. Vestibulum fermentum blandit gravida. Aenean
                  condimentum ex semper, vestibulum sapien quis, auctor mi.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae;
                </p>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:8000/user");
  const json = res.json();
  console.log(res);
  return { user: json };
};

export default Home;
