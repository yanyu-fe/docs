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
                        }
                    ]
                }
            ]
        }
    ]
}
