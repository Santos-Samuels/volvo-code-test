import { AppProps } from "next/app";
import "../../public/css/styles.css";
import { AppContainer } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  );
}

export default MyApp;
