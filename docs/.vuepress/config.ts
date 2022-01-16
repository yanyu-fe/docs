import { defineUserConfig } from "vuepress";
import { DefaultThemeOptions, ViteBundlerOptions } from "vuepress";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { codeBlockPlugin } from "@yanyu-fe/vuepress-plugin-code-block";
import * as navbar from "./configs/navbar";
export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
    title: "QA文档",
    locales:{
        '/':{
            lang:"zh-CN",
            title:"QA文档"
        }
    },
    themeConfig:{
        locales:{
            '/':{
                lastUpdatedText:"最后更新",
                contributorsText:"贡献者",
                navbar:navbar.zh
            }
        },
    },
    bundlerConfig: {
        viteOptions: {
            server: {
                fs: {
                    strict: false,
                },
            },
            plugins: [vueJsx()],
        },
    },
    plugins: [
        [codeBlockPlugin, {}],
        [
            '@vuepress/plugin-search',
            {
                locales:{
                    '/':{
                        placeholder:"搜索"
                    }
                }
            }
        ]
    ],
});
