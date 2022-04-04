import type { SidebarConfig } from "@vuepress/theme-default"
export const zh:SidebarConfig = {
    '/guide/':[
        {
            text:"指南",
            children:[
                '/guide/index.md'
            ]
        }
    ],
    '/plugins/':[
        {
            text:"插件",
            children:[
                {
                    text:"vuepress",
                    children:[
                        {
                            text:"code-block",
                            link:"/plugins/vuepress/code-block.md"
                        },
                        {
                            text:"dumi",
                            link:"/plugins/vuepress/dumi-theme.md"
                        }
                    ]
                }
            ]
        }
    ],
    '/blog/taro/': ["/blog/taro/create-project"],
    '/blog/vue/': ["/blog/vue/rollup","/blog/vue/translation",'/blog/vue/monorepo'],
    "/mist/cli/": ["/mist/cli/"],
    "/mist/ui/": ["/mist/ui/"],
    "/mist/":["/mist/introduce"],

}
