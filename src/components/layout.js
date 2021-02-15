import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

export const siteTitle = 'Meroware Instance Tutorial';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/static/favicon.ico" />
        <meta
          name="description"
          content="Learn how to deploy to Github Pages using a Github Actions Workflow For Continuous Deployment"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <img
          src="/static/images/meroware.png"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt={siteTitle}
        />
        <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
