import Link from "next/link";

const GlobalHeader: React.FC = () => {
  return (
    <header className="fixed z-50 top-10 left-1/2 transform -translate-x-1/2 w-10/12 bg-white px-8 py-4 flex justify-between rounded-2xl shadow-lg">
      <Link href="/" passHref>
        <a className="text-2xl font-semibold">OcOsu</a>
      </Link>

      <Link href="/mypage" passHref>
        <a>My page</a>
      </Link>
    </header>
  );
};

export default GlobalHeader;
