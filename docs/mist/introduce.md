# 介绍

本次带来的是UI库的开源计划，整个的开源配置历程。大致分为如下几个部分：

## `mist-cli`开发

用于打包`UI`库和其他与`UI`库相关的生态的类库，主要包含的功能如下：

* 打包`UI`库
* 打包工具类库
* 自定生成`UI`组件

## `mist-design`开发

主要的`UI`库部分，采用的语言如下：

* ts & tsx
* vue3
* less主题切换
* rollup打包
* tree-shaking支持
* pnpm


## 项目创建

首先我们先从创建一个项目开始，整个项目在搭建的过程中全部使用`pnpm`去实现的，所以如果您没有安装`pnpm`请先安装:

```shell
npm i -g pnpm
```

### 构建工程

1. 创建一个`mist-desgin`的文件夹

```shell
# 创建目录
mkdir mist-desgin
# 进入目录
cd mist-desgin
# 初始化目录
pnpm init -y

```

2. 创建工程目录

```shell
# 创建工程目录
mkdir packages
# 进入工程目录
cd packages
# 创建脚手架目录
mkdir cli && cd cli && pnpm  init -y
# 创建UI库目录
mkdir ui && cd ui && pnpm  init -y
```

3. 配置`monorepo`

我们的项目使用的是`monorepo`的开发方式，所以我们需要创建一个`pnpm-workspace.yaml`

```yaml
packages:
  - 'packages/**'
  - '!**/test/**'
```

4. 配置`package.json`

由于我们已经安装的部分依赖，可以直接复制下面的这份代码即可：

```json
{
  "name": "mist-monorepo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "preinstall": "npx only-allow pnpm",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"
  },
  "keywords": [],
  "author": "aibayanyu",
  "license": "ISC",
  "workspaces": [
    "packages/*"
  ],
  "dependencies": {
    "vue": "^3.2.27",
    "mist-design": "workspace:*"
  },
  "devDependencies": {
    "@mist/cli": "workspace:*",
    "@rushstack/eslint-patch": "^1.1.0",
    "@types/node": "^16.11.21",
    "@vitejs/plugin-vue": "^2.0.1",
    "@vitejs/plugin-vue-jsx": "^1.3.3",
    "@vue/eslint-config-prettier": "^7.0.0",
    "@vue/eslint-config-typescript": "^10.0.0",
    "@vue/test-utils": "^2.0.0-rc.18",
    "cypress": "^9.3.1",
    "eslint": "^8.5.0",
    "eslint-plugin-cypress": "^2.12.1",
    "eslint-plugin-vue": "^8.2.0",
    "jsdom": "^19.0.0",
    "prettier": "^2.5.1",
    "start-server-and-test": "^1.14.0",
    "typescript": "~4.5.4",
    "vite": "^2.7.13",
    "vitest": "^0.1.23",
    "vue-tsc": "^0.29.8"
  }
}
```

5. 开始安装依赖

由于我们在上一部分已经复制了一份脚手架的文件，所以接下来我们需要的就是直接安装依赖

```shell
pnpm i
```

6. 配置`eslint`

在根目录下创建一个`.eslintrc.js`

这是我们在开发中常用的一些配置如下，可以根据自己的需求去定制：

```js
/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  overrides: [
    {
      files: ["cypress/integration/**.spec.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-undef": "off",
  },
};
```

以上便是我们配置一个基本的工程的步骤
