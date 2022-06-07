import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData } from "../../lib/posts";
import { BlogCard } from "../../components/BlogCard";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <div className="flex-auto">
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <BlogCard id={id} date={date} title={title} key={id}>
              {excerpt}
            </BlogCard>
          ))}
        </div>
      </section>
      <img src="/images/divider-2.svg" />
    </Layout>
  );
}
