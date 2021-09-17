import { NextPage } from "next";
import { GetServerSideProps } from "next";
import Link from "next/link";
import CircleImg from "@/components/CircleImg";
import Router from "next/router";
import useSWR from "swr";

const UserPage: NextPage = () => {
  const fetcher = (url: string) =>
    fetch(url, { credentials: "include" }).then((r) => r.json());
  const { data, error } = useSWR("http://localhost:8000/user", fetcher);

  const user: User = data;

  if (!user) {
    // Loading
    return <div></div>;
  } else {
    return (
      <div className="container mx-auto relative h-screen">
        <main className="h-full">
          <h2 className="text-3xl text-center pt-48">ユーザー情報</h2>

          {/* OcOsu Passport */}
          <div
            className="w-4/5 max-w-4xl mx-auto mt-16 p-8 border-8 border-white rounded-3xl bg-yellow-300 shadow-xl"
            style={{
              backgroundImage: `url(
                    "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f7f7f7' fill-opacity='0.8' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E"
                  )`,
            }}
          >
            <div className="p-10 rounded-3xl border-4 border-white bg-yellow-300 bg-opacity-90">
              <h3 className="text-5xl font-bold text-white">OcOsu Passport</h3>
              <div className="flex items-center w-full mt-8 mb-2">
                <div className="flex-none w-1/3">
                  <CircleImg imgPath={user.icon} />
                </div>
                <div className="flex-grow ml-12">
                  <h3 className="text-4xl font-semibold mb-2">
                    {user.username}
                  </h3>
                  <p className="text-xl">{user.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Your Oc */}
          <div className="mt-24 text-center">
            <h3 className="text-3xl font-semibold mb-8">Your Oc</h3>
            <div className="bg-white px-8 py-8 rounded-2xl shadow-xl mb-10">
              <div
                className="mx-auto max-w-md mb-8"
                style={{ maxHeight: "500px" }}
              >
                <CircleImg imgPath={user.icon} />
              </div>

              <span className="block text-2xl font-semibold text-yellow-600 mb-4">
                Title
              </span>
              <p>Explanation</p>
            </div>
          </div>

          {/* Home Btn */}
          <div className="mt-32 pb-48">
            <Link href="/" passHref>
              <a className="block w-max mx-auto px-12 py-3 rounded-xl border-4 border-yellow-300 text-xl font-semibold hover:bg-yellow-300 hover:border-white hover:text-white transition">
                Home
              </a>
            </Link>
          </div>
        </main>
      </div>
    );
  }
};

export default UserPage;
