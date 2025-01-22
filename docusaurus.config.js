// @ts-check
// `@type` JSDoc 注释允许编辑器自动完成和类型检查
// （当与 `@ts-check` 配对时）。
// 有多种等效方式声明你的 Docusaurus 配置。
// 参见：https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// 这在 Node.js 中运行 - 请不要在这里使用客户端代码（浏览器 API，JSX 等...）

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "WIKI",
  tagline: "诸神愚戏WIKI",
  favicon: "img/logo.png",

  // 在这里设置你站点的生产 URL
  url: "https://your-docusaurus-site.example.com",

  // 设置你的站点部署的 /<baseUrl>/ 路径
  // 对于 GitHub 页面部署，通常是 '/<projectName>/'
  baseUrl: "/",

  // GitHub 页面部署配置。
  // 如果你没有使用 GitHub 页面，则不需要这些。
  organizationName: "Mueoink", // 通常是你的 GitHub 组织/用户名。
  projectName: "zsyx-wiki", // 通常是你的仓库名。

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",

  // 即使你不使用国际化，你也可以使用此字段设置
  // 有用的元数据，如 html lang。例如，如果你的网站是中文的，
  // 你可能想把 "en" 替换为 "zh-Hans"。
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          // 请将此更改为你的仓库。
          // 移除此项以移除 "编辑此页面" 链接。
          editUrl: "https://github.com/Mueoink/zsyx-wiki",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "诸神愚戏 WIKI",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            href: "/",
            label: "贡献",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Mueo`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
