const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'HSRW Robotics',
  tagline: 'Judgement day is coming',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/HSRW_Robotics_Project/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hsrwrobotics', // Usually your GitHub org/user name.
  projectName: 'HSRW_Robotics_Project', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'HSRW Robotics Club Docs',
      logo: {
        alt: 'HSRW Robotics Club Logo',
        src: 'https://lh3.googleusercontent.com/-BQHHYyYKlzI/XZhR7injz3I/AAAAAAAAABA/XNm7mozeR_sn44X-68gbtHh39391ug2MwCEwYBhgLKtQDABHVOhyAPBh-B7T8FwwPduDZRlETndTjIWr4kUxIf_wrLEOl7ztl5pOpyRVcfOwp5CAwkKKTMQnGj6NWpJ7WX06GM1su7b5k4M1MSU9N96MpvuBszZXyf8WD2jhsPi1Whszf7ifzjSBNOUbVAK8w41host7aJqYjYOrXn8c-v87dqmfoXRiAI9DIGfSvSoVvXmmn7rRUchPQLu_13q3GgWS14IVWmGn4u_2lmSqGVvcIOfPts9mzyjC4GqXAG_Kz5tN0S7uvkY2OWx5Q6dxn61260Z2gMBBfGZfMFfrt8KhHY2OllqY2ZMNysmQdh0RmMjhcY-Mtj6v70Wu5lJPpz2iA_-KQaC1kZsMUSwvallY5BhXfb7_2w_GnhlRTz3l190AtPWZ4h3KAi4GqmHDbgQJXXX0XCtngduER-Kpwgs1PkZOsdK_-qnd_tqAe0J75ZpvrQUMFgTlKgBQzssjdONiE-9PvZtu_NrstzeFZ7_vwYs5iOGJaFBa4Negy2d7Ku5iMafgefrXFrAmwIm8povdWdmDbU81lFaDYHNYuCwdmHeU7W3jVwLUikhrbOaQgSDM8priEXE6lQDCsABNRpOyrly06SVU3Ri4D21XviVrPb71rMJfkwoYG/w140-h140-p/index.jpg',
      },
      items: [
        {
          type: 'doc',
          docId: 'test_next',
          position: 'left',
          label: 'Projects',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: 'team', label: 'Team', position: 'left'},
        {
          label: 'Support us', 
          position: 'left',
          items: [
            {
              href: 'https://www.buymeacoffee.com/hsrwrobotics',
              label: "Buy me a Coffee",
            },
            {
              href: 'https://www.paypal.com/paypalme/hsrwrobotics',
              label: "Paypal",
            }
            
          ],
        },


        {
          href: 'https://github.com/hsrwrobotics/HSRW_Robotics_Project',
          label: 'GitHub',
          position: 'right',
        },
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
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCHjGc4oEYnKwVJ9gfushk-g/featured',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/HSRWRobotics/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/hsrwrobotics/?hl=en',
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
              href: 'https://github.com/hsrwrobotics',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HSRW Robotics Club Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
