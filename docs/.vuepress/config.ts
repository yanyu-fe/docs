import { defineUserConfig } from "vuepress";
import { DefaultThemeOptions, ViteBundlerOptions } from "vuepress";
import vueJsx from "@vitejs/plugin-vue-jsx";
import * as navbar from "./configs/navbar";
import * as sidebar from "./configs/sidebar";
import { resolve } from "path"

const base:`/${string}/` | '/' =  process.env.VITE_BASE_PATH ? `/${process.env.VITE_BASE_PATH}/` : '/';
export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
    title: "QA文档",
    theme: "@yanyu-fe/vuepress-theme-dumi",
    locales:{
        '/':{
            lang:"zh-CN",
            title:"QA文档"
        }
    },
    themeConfig:{
        repo:"yanyu-fe/docs",
        logo:"/logo.svg",
        locales:{
            '/':{
                lastUpdatedText:"最后更新",
                contributorsText:"贡献者",
                navbar:navbar.zh,
                sidebar:sidebar.zh,
                editLinkText: '在 GitHub 上编辑此页',
            }
        },
    },
    base,
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
        ['@yanyu-fe/vuepress-plugin-code-block', {}],
        [
            '@vuepress/plugin-search',
            {
                locales:{
                    '/':{
                        placeholder:"搜索"
                    }
                }
            }
        ],
        [
            '@vuepress/plugin-toc',{}
        ],
        [
            '@vuepress/plugin-register-components',
            {
                componentsDir: resolve(__dirname, './components'),
            }
        ]
    ],
});
