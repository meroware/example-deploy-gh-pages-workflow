import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>An awesome github actions workflow for deploying to github pages</p>
        <p>
          Check out the complete tutorial at <br />
          <a href="https://www.youtube.com/channel/UCAyEo_24I-oZtsBcAd3Vxig">
            Meroware Instance Youtube Channel
          </a>
        </p>
      </section>
    </Layout>
  );
}
