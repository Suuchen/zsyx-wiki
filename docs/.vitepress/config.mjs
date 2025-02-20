import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "诸神愚戏 WIKI",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  description: "诸神愚戏 WIKI",
  lang: "zh",
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.png",
    search: { provider: "local" },
    nav: [
      { text: "WIKI", link: "/wiki/start", activeMatch: "/wiki/" },
      {
        text: "贡献",
        link: "/contribution/contribute",
        activeMatch: "/contribution/",
      },
    ],
    editLink: {
      pattern: "https://github.com/Mueoink/zsyx-wiki/tree/main/docs/:path",
      text: "编辑此页",
    },

    sidebar: {
      "/wiki/": [
        {
          text: "开始",
          collapsed: false,
          items: [{ text: "介绍", link: "/wiki/start" }],
        },
        {
          text: "世界观",
          collapsed: false,
          items: [
            { text: "世界观概览", link: "/wiki/setting/world_setting.md" },
            {
              text: "诸神信仰",
              collapsed: true,
              items: [{ text: "神明概览", link: "/wiki/setting/gods/main.md" }],
            },
            {
              text: "地理划分",
              collapsed: true,
              items: [
                { text: "地理概览", link: "/wiki/setting/geography/main.md" },
              ],
            },
            {
              text: "种族划分",
              collapsed: true,
              items: [
                { text: "种族概览", link: "/wiki/setting/race/main.md" },
              ],
            },
          ],
        },
        {
          text: "角色 天赋及道具",
          collapsed: false,
          items: [
            { text: "主要角色信息", link: "/wiki/characters/characters.md" },
            { text: "天赋信息", link: "/wiki/characters/skills.md" },
            { text: "道具信息", link: "/wiki/characters/props.md" },
            { text: "其他角色信息", link: "/wiki/characters/another.md" },
          ],
        },
        {
          text: "势力组织",
          collapsed: false,
          items: [
            { text: "势力概览", link: "/wiki/organization/main.md" },
            {
              text: "玩家势力",
              collapsed: true,
              items: [
                {
                  text: "传火者",
                  link: "/wiki/organization/player/flamebearer.md",
                },
                {
                  text: "丑角、命定之人",
                  link: "/wiki/organization/player/clown.md",
                },
                {
                  text: "历史学派",
                  link: "/wiki/organization/player/historical",
                },
              ],
            },
            {
              text: "非玩家势力",
              collapsed: true,
              items: [
                {
                  text: "理质之塔",
                  link: "/wiki/organization/npc/tower-of-reason.md",
                },
                {
                  text: "大审判庭",
                  link: "/wiki/organization/npc/grand-chamber.md",
                },
                {
                  text: "余晖教廷",
                  link: "/wiki/organization/npc/dusk-holy-see.md",
                },
              ],
            },
          ],
        },
        {
          text: "情节与事件",
          collapsed: false,
          items: [
            {
              text: "小说剧情时间线",
              collapsed: true,
              items: [
                { text: "第一卷", link: "/wiki/story/main/first.md" },
                { text: "第二卷", link: "/wiki/story/main/sec.md" },
                { text: "第三卷", link: "/wiki/story/main/thr.md" },
              ],
            },
            {
              text: "纪元故事线",
              collapsed: true,
              items: [
                { text: "第一纪元-生命", link: "/wiki/story/age/first_age.md" },
                { text: "第二纪元-沉沦", link: "/wiki/story/age/sec_age.md" },
                { text: "第三纪元-文明", link: "/wiki/story/age/thr_age.md" },
                { text: "第四纪元-混沌", link: "/wiki/story/age/four_age.md" },
                { text: "第五纪元-存在", link: "/wiki/story/age/five_age.md" },
                { text: "第六纪元-虚无", link: "/wiki/story/age/six_age.md" },
              ],
            },
          ],
        },
        {
          text: "同人收录",
          collapsed: true,
          items: [
            {
              text: "诸神牌",
              collapsed: true,
              items: [
                { text: "规则", link: "/wiki/fanwork/puke/rule.md" },
                { text: "体系详情", link: "/wiki/fanwork/puke/details.md" },
              ],
            },
          ],
        },
      ],
      "/contribution/": [
        {
          text: "贡献",
          collapsed: false,
          items: [
            { text: "如何贡献", link: "/contribution/contribute" },
            { text: "编写要求", link: "/contribution/compile" },
            { text: "团队", link: "/contribution/team" },
          ],
        },
      ],
    },

    outline: {
      label: `本页层级`,
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Mueoink/zsyx-wiki/" },
    ],
    footer: {
      message: "Released under the CC BY-NC-ND 4.0.",
      copyright: "Copyright © 2024-present Mueo",
    },
  },
});
