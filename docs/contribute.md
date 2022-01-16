# 维护贡献

欢迎各位小伙伴儿来参与和维护为我们共同的技术文档库，参与方式如下：

主项目地址[yanyu-fe/docs](https://github.com/yanyu-fe/docs.git)

:::tip

所有参与维护文档的小伙伴儿们，都会在最后的时候看到自己的贡献的名字的批注

:::

## PR

可以通过`fork`项目的方式，然后在通过提交`pull requests`的方式来参与到文档的维护和开发。

## 贡献

可以添加`aibayanyu2020`的微信号，拉你到`github`项目中，共同维护和开发。


## 项目部署步骤


### 拉取

```shell
git clone git@github.com:yanyu-fe/docs.git
```

### 贡献名称

```shell
git config user.name 您的名字

git config user.email 您的邮箱
```

### 安装

> 我们目前使用的都是`pnpm`来作为代码的包管理工具，如果还没有使用过，请先通过`npm i -g pnpm`安装`pnpm`

```shell
# 安装依赖
pnpm i
```

### 启动

```shell
pnpm docs:dev
```
