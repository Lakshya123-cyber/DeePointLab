import "../styles/globals.css";

import type { AppProps } from "next/app";
import ScrollObserver from "../utils/scroll-observer";

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <ScrollObserver>
      <AnyComponent {...pageProps} />
    </ScrollObserver>
  );
}

export default MyApp;
