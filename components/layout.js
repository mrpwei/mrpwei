import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "<peng.wei/>";
export const siteTitle = "Peng Wei's blog";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <nav>
        <Link href="/">
          <a className="mx-2">Home</a>
        </Link>
        <Link href="/blog">
          <a className="mx-2">Blog</a>
        </Link>
        <Link href="/wiki">
          <a className="mx-2">Wiki</a>
        </Link>
      </nav>
      <header className={styles.header}>
        {home ? (
          <>
            <img src="/images/banner-2.svg" />
            <h1
              className="text-4xl  bg-gradient-to-r from-sky-500 to-indigo-500"
              style={{
                fontFamily: "SourceCodePro-Regular",
                fontWeight: 200,
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {name}
            </h1>
          </>
        ) : (
          <>
            <img src="/images/banner-3.svg" />
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
