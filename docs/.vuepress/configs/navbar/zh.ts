import type { NavbarConfig } from "@vuepress/theme-default"
export const zh:NavbarConfig = [
    {
        text:"指南",
        link:"/guide/"
    },
    {
        text:"开源",
        children:[
            {
                text:"vuepress",
                children:[
                    {
                        text:"代码块插件",
                        link:"/plugins/vuepress/code-block"
                    }
                ]
            }
        ]
    },
    {
        text:"博客",
        children:[
            {
                text: "vue",
                link:"/blog/vue/"
            },
            {
                text: "taro",
                link:"/blog/taro/"
            }
        ]
    },
    {
        text:"UI库",
        children:[
            {
                text: "介绍",
                link: "/mist/introduce"
            },
            {
                text: "脚手架",
                link: "/mist/cli/"
            },
            {
                text: "组件库",
                link: "/mist/ui/"
            }
        ]
    }
];
