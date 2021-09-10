import { AppProps } from "next/dist/shared/lib/router/router";

// import Chakra UI

// global style
import "../styles/globals.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
