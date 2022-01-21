# 创建一个taro的项目

`taro`刚正式发布`3.4.x`版本，接下来我们将一起学习一下，如何使用`vue3 + pina + taro + typescript`实现开发跨端小程序。

## 安装

如果您之前已经安装过了taro，若不是`taro3.4.x`版本的请到全局的`node_modules`去删除并通过以下的步骤重新安装。

```shell

# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli

# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli

```

:::warning 建议

官方也给出我们建议，如果在安装`sass`的时候报错了，需要我们配置一下`sass`的镜像

```shell
 npm install -g mirror-config-china
```
:::


## 创建项目

接下来我们需要使用`taro`创建一个项目：

```shell

taro init template-vue3

```

我们按照下面的步骤进行选择：

![1.png](./assets/1.png)

:::tip

`css`预处理器可以按照自己的喜好，我这里选用的是less

:::

最后拉取代码后，我们选择默认模板，等待安装即可。

## 配置`pinia`

首先我们安装一下`taro-plugin-pinia`插件来支持`pinia`

```shell
yarn add taro-plugin-pinia
```

在`config/index.js`中的`plugins`中增加插件`taro-plugin-pinia`

接下来我们安装`pinia`

```shell
yarn add pinia
```

安装完成后，我们在`src/app.ts`下配置加载一下`pinia`

```diff
import { createApp } from 'vue'
import './app.less'
+ import { createPinia } from "pinia"
const App = createApp({
  onShow () {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

+ App.use(createPinia());
export default App

```
