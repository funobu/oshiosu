import { AppProps } from "next/dist/shared/lib/router/router";

// import Tailwind CSS
import "tailwindcss/tailwind.css";
// global style
import "../styles/globals.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
