// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EasyA Layer React UI',
  tagline: 'Build Web3 Applications with Ease',
  favicon: 'img/favicon.ico',

  url: 'https://easya-tech.github.io',
  baseUrl: '/easya-layer-react-docs/',
  organizationName: 'easya-tech', // Your GitHub username
  projectName: 'easya-layer-react-docs', // Your repository name
  deploymentBranch: 'gh-pages', // The branch to deploy to
  trailingSlash: false,

  onBrokenLinks: 'warn', 
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/EasyA-Tech/layer-ui-react/tree/main/docs/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      navbar: {
        title: '@easya/layer-ui-react',
        logo: {
          alt: 'EasyA Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/EasyA-Tech/easya-layer',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.npmjs.com/package/@easya/layer-ui-react',
            label: 'npm',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/tutorials/intro',
              },
              {
                label: 'Components',
                to: '/category/components---basics',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/+WnrUl1ZpdHZlMjk0',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/EasyA-Tech/easya-layer',
              },
              {
                label: 'Starter Template',
                href: 'https://github.com/EasyA-Tech/easya-layer-starter-react',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EasyA Technology. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;