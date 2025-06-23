// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ezycreate Resources',
  tagline: 'Tools and Docs to Power Your Integration',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://resources.ezycreate.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'products',
        path: 'docs/products',
        routeBasePath: 'products',
        sidebarPath: require.resolve('./sidebars-products.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ec-designer',
        path: 'docs/ec-designer',
        routeBasePath: 'ec-designer',
        sidebarPath: require.resolve('./sidebars-ec-designer.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ec-store',
        path: 'docs/ec-store',
        routeBasePath: 'ec-store',
        sidebarPath: require.resolve('./sidebars-ec-store.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ec-dropship',
        path: 'docs/ec-dropship',
        routeBasePath: 'ec-dropship',
        sidebarPath: require.resolve('./sidebars-ec-dropship.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ec-factory',
        path: 'docs/ec-factory',
        routeBasePath: 'ec-factory',
        sidebarPath: require.resolve('./sidebars-ec-factory.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ec-crm',
        path: 'docs/ec-crm',
        routeBasePath: 'ec-crm',
        sidebarPath: require.resolve('./sidebars-ec-crm.js'),
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs/tutorial-basics',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars-tutorial.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Resources',
      logo: {
        alt: 'My Site Logo',
        src: 'img/ezycreatelogo.png',
      },
      items: [
        // 🔴 Remove this block to hide 'Tutorial'
       // {
       //   type: 'docSidebar',
        //  sidebarId: 'tutorialSidebar',
         // position: 'left',
        //},
        { to: '/products/Explore%20all%20products/Photobook%20Designer', label: 'Products', position: 'left' },
        { to: '/ec-designer/Get%20Started', label: 'EC Designer', position: 'left' },
        { to: '/ec-store', label: 'EC Store', position: 'left' },
        { to: '/ec-dropship', label: 'EC Dropship', position: 'left' },
        { to: '/ec-factory', label: 'EC Factory', position: 'left' },
        { to: '/ec-crm', label: 'EC CRM', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ezycreate 2025`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
