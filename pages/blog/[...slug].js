import {
  formatSlug,
  getAllFilesFrontMatter,
  getFiles,
  getFileBySlug,
} from "/lib/mdx";
import { MDXLayoutRenderer } from "../../components/MDXComponents";

const DEFAULT_LAYOUT = "PostLayout";

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
  const allPosts = await getAllFilesFrontMatter("blog");
  const postIndex = allPosts.findIndex(
    (post) => formatSlug(post.slug) === params.slug.join("/")
  );
  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;
  const post = await getFileBySlug("blog", params.slug.join("/"));
  return {
    props: {
      post,
      prev,
      next,
    },
  };
}

export default function Blog({ post, prev, next }) {
  const { mdxSource, toc, frontMatter } = post;

  return (
    <>
      <MDXLayoutRenderer
        layout={DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        toc={toc}
        frontMatter={frontMatter}
        prev={prev}
        next={next}
      />
      {/* <main className="prose dark:prose-dark max-w-full">
        <h1 className="mb-0">{title}</h1>
        <small className="text-gray-600 dark:text-gray-400">
          <Date dateString={date} />
        </small>
        <Component />
        <Link href="/blog">
          <a>⬅️ Back to blog list</a>
        </Link>
      </main> */}
    </>
  );
}
