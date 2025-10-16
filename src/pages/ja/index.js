import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from '../index.module.css';

const FeatureList = [
  {
    title: 'はじめに',
    description: 'ECデザイナーの基本概念と主要な概念を学んで、素早く開始できます。',
    link: '/ja/ec-designer/get-started/overview',
  },
  {
    title: 'フォトブックデザイナー',
    description: '思い出を傑作に。直感的なツールと豊富なレイアウトを活用し、フォトブックを自由に作成・カスタマイズできます',
    link: '/ja/photobook-designer/overview',
  },
  {
    title: 'プリントデザイナー',
    description: '印刷サービスをさらに高めましょう。洗練されたデザイン、柔軟な設定、そして簡単な操作で、プレミアム印刷製品をお客様に提供できます。',
    link: '/ja/ec-designer/print-designer/set-up-a-print-product-blank',
  },
  {
    title: 'カレンダーデザイナー',
    description: '日々を彩る。洗練されたデザインと柔軟なカスタマイズ機能で、あなただけのパーソナライズされたカレンダーを作成できます。',
    link: '/ja/ec-designer/calendar-designer/set-up-a-calendar-product-blank',
  },
  {
    title: 'カスタム製品デザイナー',
    description: 'ギフトからホームデコレーションまで、お客様の心に響くユニークなカスタム製品をデザインしましょう。',
    link: '/ja/ec-designer/custom-product-designer/set-up-a-decor-product-blank',
  },
  {
    title: 'DTF製品デザイナー',
    description: 'アパレル制作を簡単に。数回クリックするだけで、Tシャツやパーカーなどに対応したダイレクト・トゥ・フィルム（DTF）印刷を設定できます。',
    link: '/ja/ec-designer/DTF-product-designer/set-up-a-tshirt-product-blank',
  },
];

function Feature({title, description, link}) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureContent}>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
        <Link
          className={styles.featureLink}
          to={link}>
          詳細を見る →
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="ECデザイナー リソース"
      description="統合を強化するツールとドキュメント">
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className={styles.heroTitle}>ECデザイナー リソース</h1>
          <p className={styles.heroSubtitle}>
            ECデザイナーへようこそ。ECデザイナー SaaS内の強力なツールで、企業がパーソナライズされた製品を簡単に作成、カスタマイズ、販売できるようになります。
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
