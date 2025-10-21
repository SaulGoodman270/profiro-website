import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* FAVICONS — PNG odkazy jsou záměrně před ICO; ?v=1 = cache-bust */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png?v=1" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=1" />
        {/* ICO jako fallback pro prohlížeče, co ho preferují */}
        <link rel="icon" href="/favicon.ico?v=1" sizes="any" type="image/x-icon" />

        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}