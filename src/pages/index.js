import React from 'react';
import { Redirect } from '@docusaurus/router';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const { i18n } = useDocusaurusContext();
  const { pathname } = useLocation();

  // Redirect Japanese users to Japanese version
  if (i18n.currentLocale === 'ja') {
    return <Redirect to="/ja/products/explore-all-products/photobook-designer" />;
  }

  // Default redirect for other languages
  return <Redirect to="/products/explore-all-products/photobook-designer" />;
}
