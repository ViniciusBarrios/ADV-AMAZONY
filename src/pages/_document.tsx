import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

import { getCssText } from "stitches";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <style dangerouslySetInnerHTML={{ __html: getCssText() }} />

        <meta
          name="facebook-domain-verification"
          content="9t24yvxelrtv5j6z7hci4k2m2mv22b"
        />

        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
