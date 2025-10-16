import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import styles from './index.module.css';

const FeatureList = [
  {
    titleKey: 'homepage.getStarted.title',
    descriptionKey: 'homepage.getStarted.description',
    link: '/ec-designer/get-started/overview',
  },
  {
    titleKey: 'homepage.photobookDesigner.title',
    descriptionKey: 'homepage.photobookDesigner.description',
    link: '/ec-designer/photobook-designer/overview/',
  },
  {
    titleKey: 'homepage.printDesigner.title',
    descriptionKey: 'homepage.printDesigner.description',
    link: '/photobook-designer',
  },
  {
    titleKey: 'homepage.calendarDesigner.title',
    descriptionKey: 'homepage.calendarDesigner.description',
    link: '/ec-designer/calendar-designer/set-up-a-calendar-product-blank',
  },
  {
    titleKey: 'homepage.customProductDesigner.title',
    descriptionKey: 'homepage.customProductDesigner.description',
    link: '/ec-designer/custom-product-designer/set-up-a-decor-product-blank',
  },
  {
    titleKey: 'homepage.dtfProductDesigner.title',
    descriptionKey: 'homepage.dtfProductDesigner.description',
    link: '/ec-designer/DTF-product-designer/set-up-a-tshirt-product-blank',
  },
];
function Feature({titleKey, descriptionKey, link}) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureContent}>
        <h3 className={styles.featureTitle}>
          <Translate id={titleKey} />
        </h3>
        <p className={styles.featureDescription}>
          <Translate id={descriptionKey} />
        </p>
        <Link
          className={styles.featureLink}
          to={link}>
          <Translate id="homepage.learnMore" />
        </Link>
      </div>
    </div>
  );
}
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="EC Designer Resources"
      description="Tools and Docs to Power Your Integration">
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className={styles.heroTitle}>
            <Translate id="homepage.title">EC Designer Resources</Translate>
          </h1>
          <p className={styles.heroSubtitle}>
            <Translate id="homepage.subtitle">
              Welcome to the EC Designer – a powerful tool within EzyDesigner SaaS that empowers businesses to
              create, customize, and sell personalized products effortlessly.
            </Translate>
          </p>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className={styles.featuresGrid}>
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

