# 搭建monorepo项目

## 什么是Monorepo

`Monorepo` 是管理项目代码的一个方式，指在一个项目仓库 `(repo)` 中管理多个模块/包`(package)`，不同于常见的每个模块建一个 `repo`。

## 使用monorepo做项目管理的好处

`Monorepo`最主要的好处是统一的工作流和`Code Sharing`。比如我想看一个`package` 的代码、了解某段逻辑，不需要找它的 repo，直接就在当前 repo；当某个需求要修改多个 `package` 时，不需要分别到各自的`repo`进行修改、测试、发版或者`npm link`，直接在当前`repo`修改，统一测试、统一发版。只要搭建一套脚手架，就能管理（构建、测试、发布）多个`package`。

