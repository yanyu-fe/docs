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
    }
];
