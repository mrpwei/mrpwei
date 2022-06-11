import { formatSlug, getFiles, getFileBySlug } from "/lib/mdx";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import Link from "next/link";
import Date from "/components/date";

export async function getStaticPaths() {
  const posts = getFiles("blog");
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split("/"),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("blog", params.slug.join("/"));
  return {
    props: {
      post,
    },
  };
}

export default function Blog({ post }) {
  const { mdxSource, frontMatter } = post;
  const { title, date } = frontMatter;
  const Component = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);
  return (
    <>
      <main className="prose dark:prose-dark max-w-full">
        <h1 className="mb-0">{title}</h1>
        <small className="text-gray-600 dark:text-gray-400">
          <Date dateString={date} />
        </small>
        <Component />
        <Link href="/blog">
          <a>⬅️ Back to blog list</a>
        </Link>
      </main>
    </>
  );
}
