import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* 1) Preferované PNG (bez query, s verzí v názvu) */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.v3.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.v3.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.v3.png" />

        {/* 2) Fallback ICO (Safari / starší prohlížeče) */}
        <link rel="icon" href="/favicon.v3.ico" sizes="any" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.v3.ico" type="image/x-icon" />

        {/* Smart App Banner pro iOS — zobrazuje se automaticky nahoře v Safari */}
        <meta name="apple-itunes-app" content="app-id=6753187157" />

        {/* Volitelně Pinned Tab (macOS Safari) – pokud máš monochrom. SVG loga */}
        {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" /> */}

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