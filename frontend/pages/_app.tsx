import { AppProps } from "next/dist/shared/lib/router/router";
import GlobalHeader from "@/components/GlobalHeader";

// import Tailwind CSS
import "tailwindcss/tailwind.css";
// global style
import "../styles/globals.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalHeader />
      <Component {...pageProps} />
    </>
  );
};

export default App;
