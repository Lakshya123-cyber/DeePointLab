import "../styles/globals.css";

import type { AppProps } from "next/app";
import ScrollObserver from "../utils/scroll-observer";
import SizeObserver from "../utils/size-observer";

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <SizeObserver>
      <ScrollObserver>
        <AnyComponent {...pageProps} />
      </ScrollObserver>
    </SizeObserver>
  );
}

export default MyApp;
