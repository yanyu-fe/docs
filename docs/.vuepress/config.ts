import { defineUserConfig } from "vuepress";
import { DefaultThemeOptions, ViteBundlerOptions } from "vuepress";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { codeBlockPlugin } from "@yanyu-fe/vuepress-plugin-code-block";
export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
    title: "文档中心",
    locales:{
        '/':{
            lang:"zh-CN",
            title:"QA文档中心"
        }
    },
    themeConfig:{
        locales:{
            '/':{
                lastUpdatedText:"最后更新",
                contributorsText:"贡献者"
            }
        }
    },
    bundlerConfig: {
        viteOptions: {
            server: {
                fs: {
                    strict: false,
                },
            },
            css: {
                preprocessorOptions: {
                    less: {
                        javascriptEnabled: true,
                    },
                },
            },
            plugins: [vueJsx()],
        },
    },
    plugins: [[codeBlockPlugin, {}]],
});
