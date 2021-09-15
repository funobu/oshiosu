import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

type Props = {
  posts: Post[];
};

const Home: NextPage<Props> = ({ posts }: Props) => {
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

          <Link href="/auth">
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
          {posts.map((post, postIdx) => {
            return (
              <div
                key={postIdx}
                className="bg-white px-8 py-8 rounded-2xl shadow-xl mb-10"
              >
                <img src={post.img_url} className="mb-8" alt="" />
                <span className="block text-2xl font-semibold text-yellow-600 mb-4">
                  {post.title}
                </span>
                <p>{post.explanation}</p>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

Home.getInitialProps = async () => {
  const url = "http://localhost:3000/api/posts";
  const res = await fetch(url)
    .then((r) => r.json())
    .catch((err) => console.log(err));
  return { posts: res };
};

export default Home;
