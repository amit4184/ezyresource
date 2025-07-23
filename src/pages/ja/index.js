import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function JapaneseHome() {
  return (
    <Layout
      title="Ezycreate リソース"
      description="統合を強化するツールとドキュメント">
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Ezycreate 資料</h1>
        </div>

        <section className={styles.section}>
          <h2>Products</h2>
          <div className={styles.productGrid}>
            <a href="/ja/ec-designer/Get%20Started/Overview" className={styles.productCard}>
              <h3>EC Designer</h3>
            </a>
            <a href="/ja/ec-store/How-To's/Products-Publishing" className={styles.productCard}>
              <h3>EC Store</h3>
            </a>
          </div>
        </section>

        <div className={styles.divider}></div>

        <section className={styles.section}>
          <h2>DOCS</h2>
          <div className={styles.docsGrid}>
            <div>
              <h3>Tutorial</h3>
              <ul>
                <li><a href="/ja/docs/intro">チュートリアル</a></li>
                <li><a href="/ja/products/explore-all-products/photobook-designer">製品</a></li>
                <li><a href="/ja/ec-designer/Get%20Started/Overview">EC Designer</a></li>
                <li><a href="/ja/ec-store/How-To's/Products-Publishing">EC Store</a></li>
              </ul>
            </div>
            <div>
              <h3>COMMUNITY</h3>
              <ul>
                <li><a href="https://stackoverflow.com/questions/tagged/ezycreate" target="_blank">Stack Overflow ↗</a></li>
                <li><a href="https://discord.gg/ezycreate" target="_blank">Discord ↗</a></li>
                <li><a href="https://x.com/ezycreate" target="_blank">X ↗</a></li>
              </ul>
            </div>
            <div>
              <h3>MORE</h3>
              <ul>
                <li><a href="/ja/blog">ブログ</a></li>
                <li><a href="https://github.com/amit4184/ezyresource" target="_blank">GitHub ↗</a></li>
              </ul>
            </div>
          </div>
        </section>

        <div className={styles.divider}></div>

        <section className={styles.section}>
          <h2>Print Designer</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3>既存テンプレートの編集</h3>
            </div>
            <div className={styles.feature}>
              <h3>テンプレート情報の編集</h3>
            </div>
            <div className={styles.feature}>
              <h3>Template Creator 画面の各種版</h3>
            </div>
            <div className={styles.feature}>
              <h3>ナビゲーションパー</h3>
            </div>
            <div className={styles.feature}>
              <h3>ページ追加（フォトブックのみ）</h3>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
