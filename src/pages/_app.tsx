import type { AppProps } from "next/app";

import GlobalStyles from "@styles/global";

export default ({ Component, pageProps }: AppProps) => {
  GlobalStyles();

  return <Component {...pageProps} />;
};
