# 类dumi主题

<NpmBadge package="@yanyu-fe/vuepress-theme-dumi" />

本次给大家带来了一个类似`Dumi`的主题包。目前第一版只是简单的对基础的主题做了调整，欢迎各位小伙伴儿补充和`PR`此项目。

## 安装

```shell
npm i @yanyu-fe/vuepress-theme-dumi

yarn add @yanyu-fe/vuepress-theme-dumi

pnpm add @yanyu-fe/vuepress-theme-dumi
```

## 配置

只需要在`config.ts`中增加如下代码，重启项目即可生效：

```ts
export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
    theme: "@yanyu-fe/vuepress-theme-dumi"
})
```
