import Head from "next/head";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const name = "Peng.wei";
export const siteTitle = "Peng Wei's blog";

export default function LayoutWrapper({ children, home }) {
  return (
    <div className="max-w-3xl mx-auto">
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
      <nav className="flex items-center justify-between h-24">
        <div>
          <Link href="/">
            <a
              className="text-2xl leading-8 mx-3 bg-gradient-to-r from-sky-500 to-indigo-500"
              style={{
                fontFamily: "SourceCodePro-Regular",
                fontWeight: 600,
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {name}
            </a>
          </Link>
        </div>
        <div className="mx-2">
          <Link href="/">
            <a className="mx-2 leading-8">Home</a>
          </Link>
          <Link href="/blog">
            <a className="mx-2 leading-8">Blog</a>
          </Link>
          <Link href="/wiki">
            <a className="mx-2 leading-8">Wiki</a>
          </Link>
          <ThemeSwitch />
        </div>
      </nav>
      <main className="mx-3 mb-6">{children}</main>
    </div>
  );
}
