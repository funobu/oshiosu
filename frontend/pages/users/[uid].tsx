import { NextPage } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import UsersJson from "@/assets/json/users.json";

interface QueryParams extends ParsedUrlQuery {
  uid: string;
}

export async function getStaticPaths() {
  const usersJson: User[] = UsersJson;
  const paths = usersJson.map((slug) => {
    const uid = String(slug.id);
    return {
      params: { uid },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: QueryParams) {
  const res = await fetch("http://localhost:3000/api/users/" + params.uid);
  const user = await res.json();
  return { props: { user } };
}

const UserPage: NextPage<{ user: User }> = ({ user }) => {
  return (
    <div className="container mx-auto relative h-screen">
      <main className="h-full">
        <h2 className="text-3xl text-center pt-32">ユーザー情報</h2>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div
            className="w-4/5 max-w-4xl p-8 border-8 border-white rounded-3xl bg-yellow-300 shadow-xl"
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
                  <img src={user.icon} alt="" />
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
        </div>
        <div className="absolute bottom-24 w-full">
          <Link href="/" passHref>
            <a className="block w-max mx-auto px-12 py-3 rounded-xl border-4 border-yellow-300 text-xl font-semibold hover:bg-yellow-300 hover:border-white hover:text-white transition">
              Home
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default UserPage;
