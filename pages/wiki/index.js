import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Wiki({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>wiki</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Wiki</h2>
      </section>
      <img src="/images/divider-5.svg" />
    </Layout>
  );
}
