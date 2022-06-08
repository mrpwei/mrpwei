import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          {postData.title}
        </h1>
        <div className="h-12">
          <Date dateString={postData.date} />
        </div>
        <div className="flex flex-col">
          {postData.toc.map((item) => (
            <a
              href={"#" + item.anchor}
              className={`${
                "anchor-" + item.level
              } text-gray-500 hover:text-gray-800`}
              key={item.anchor}
            >
              {item.text}
            </a>
          ))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
