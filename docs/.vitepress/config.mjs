import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "诸神愚戏 WIKI",
  head: [["link", { rel: "icon", href: "../public/logo.png" }]],
  description: "诸神愚戏 WIKI",
  lang: "zh",
  themeConfig: {
    logo: "/logo.png",
    search: { provider: "local" },
    nav: [
      { text: "主页", link: "/" },
      { text: "WIKI", link: "/start" },
    ],

    sidebar: [
      {
        text: "开始",
        collapsed: false,
        items: [
          { text: "介绍", link: "/start" },
          { text: "如何贡献", link: "/contribute" },
          { text: "编写要求", link: "/compile" },
        ],
      },
      {
        text: "世界观",
        collapsed: false,
        items: [
          { text: "世界观", link: "/setting/word_setting.md" },
          {
            text: "纪元",
            collapsed: true,
            items: [
              { text: "第一纪元", link: "/setting/first_age.md" },
              { text: "第二纪元", link: "/setting/sec_age.md" },
              { text: "第三纪元", link: "/setting/thr_age.md" },
              { text: "第四纪元", link: "/setting/four_age.md" },
              { text: "第五纪元", link: "/setting/five_age.md" },
              { text: "第六纪元", link: "/setting/six_age.md" },
            ],
          },
        ],
      },
      {
        text: "角色 天赋及道具",
        collapsed: false,
        items: [
          { text: "主要角色信息", link: "/characters/characters.md" },
          { text: "天赋信息", link: "/characters/skills.md" },
          { text: "道具信息", link: "/characters/props.md" },
          { text: "其他角色信息", link: "/characters/another.md" },
        ],
      },

      {
        text: "情节与事件",
        collapsed: false,
        items: [{ text: "小说剧情时间线", link: "/story/main.md" }],
      },
      {
        text: "同人收录",
        collapsed: true,
        items: [
          {
            text: "诸神牌",
            collapsed: true,
            items: [
              { text: "规则", link: "/fanwork/puke/rule.md" },
              { text: "体系详情", link: "/fanwork/puke/details.md" },
            ],
          },
        ],
      },
    ],
    outline: {
      label: `本页层级`,
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Mueoink/zsyx-wiki/" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Mueo",
    },
  },
});
