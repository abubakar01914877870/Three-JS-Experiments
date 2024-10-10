import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="
		We are a team of professionals who are passionate about creating beautiful, functional websites that help businesses grow. We specialize in web design, web development, and digital marketing services."
        />
        <meta
          name="keywords"
          content="web design, web development, digital marketing, website design, website development, web design company, web development company, digital marketing company"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/layout/favicon/icon-1.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/layout/favicon/icon-2.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/layout/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/layout/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/layout/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css?family=Sora:100,200,300,400,500,600,700,800&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Sora:100,200,300,400,500,600,700,800&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
