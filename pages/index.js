import Head from "next/head";
import { siteTitle } from "../components/LayoutWrapper";
import Link from "next/link";
import Date from "../components/date";
import { getAllFilesFrontMatter } from "/lib/mdx";

const MAX_DISPLAY = 5;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="mb-6 text-gray-600 dark:text-gray-400">
        <p>{"I'm a frontend programmer."}</p>
        <p>
          This is my personal website - my notes and blogs. For more info, visit
          my <a href="https://github.com/mrpwei">github</a>.
        </p>
      </section>

      <section>
        <h1 className="text-3xl font-semibold leading-8">Latest blog</h1>
        <ul>
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter;
            return (
              <li key={slug} className="my-6">
                <small className="text-gray-600 dark:text-gray-400">
                  <Date dateString={date} />
                </small>
                <br />
                <Link href={`/blog/${slug}`}>
                  <a className="text-xl font-semibold">{title}</a>
                </Link>
                <div>
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="mr-4 rounded-md text-sm text-primary-500"
                    >
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>
                <p className="text-gray-500 dark:text-gray-400">{summary}</p>
              </li>
            );
          })}
        </ul>
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-primary-500"
              aria-label="all posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
      </section>
      <img src="/images/divider-2.svg" />
    </>
  );
}
