---
title: Ubuntu
nav:
  title: 我的
  order: 4
---

## 更新 Ubuntu

始终建议在安装任何新软件之前将 Ubuntu 服务器更新到最新版本。您可以通过在终端中运行以下命令来完成此操作：

```bash
sudo apt-get update
sudo apt-get upgrade
```

## nodejs、npm、n

```bash
sudo apt-get install nodejs
sudo apt-get install npm
# 安装 n 模块，用于管理 nodejs 版本
sudo npm install -g n
# 安装最新稳定版本的 nodejs
sudo n latest
# 安装最新版本的 npm
sudo npm install -g npm@latest
```
