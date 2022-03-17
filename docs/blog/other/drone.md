# 学习搭建drone平台

本次搭建`drone`平台是基于`gitea`实现的，后期我们会放一期关于`gitea`搭建的视频，本次我们来学习一下如何搭建一个`drone`平台。

前提条件是我们已经安装了`docker`+`docker-compose`的情况下，我们提供了安装地址，自行安装一下，这里不再赘述：

docker安装：
[docker](https://www.runoob.com/docker/centos-docker-install.html)

docker-compose安装：
[docker-compose](https://www.runoob.com/docker/docker-compose.html)

## 创建`docker-compose.yml`

```shell
mkdir drone
cd drone
touch docker-compose.yml
vim docker-compose.yml
```

## gitea创建应用

这里建议使用管理员账号创建

找到 设置->应用->创建新的 OAuth2 应用程序

输入应用名称和重定向URL即可例如：

```
应用名称：ci

重定向URL：https://ci.xxx.cn/login
```


## 配置文件

```yaml
version: '3'
services:
  # 容器名称
  fan-drone-server:
    # 构建所使用的镜像
    image: drone/drone:1
    # 映射容器内80端口到宿主机的8188端口
    ports:
      - 8188:80
    # 映射容器内/data目录到宿主机的/data/drone目录
    volumes:
      - /data/drone:/data
    # 容器随docker自动启动
    restart: always
    environment:
      # Gitea 服务器地址
      - DRONE_GITEA_SERVER=https://git.xxx.cn
      # Gitea OAuth2客户端ID
      - DRONE_GITEA_CLIENT_ID=d8xxxxxxxxxxx74d
      # Gitea OAuth2客户端密钥
      - DRONE_GITEA_CLIENT_SECRET=F5H2exxxxxxxxxxx
      # drone的共享密钥
      - DRONE_RPC_SECRET=edfa129exxxxxxxx2a0
      # drone的主机名
      - DRONE_SERVER_HOST=ci.xxxx.cn
      # 外部协议方案可以是http或者https
      - DRONE_SERVER_PROTO=https
      # 创建管理员账户，这里对应为gitea的用户名
      - DRONE_USER_CREATE=username:xxxx,admin:true

  fan-docker-runner:
    image: drone/drone-runner-docker:1
    # 同样将3000端口向外映射
    ports:
      - 8189:3000
    restart: always
    # 依赖哪个server
    depends_on:
      - fan-drone-server
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      # 用于连接到Drone服务器的协议。该值必须是http或https。
      - DRONE_RPC_PROTO=https
      # 用于连接到Drone服务器的主机名
      - DRONE_RPC_HOST=ci.xxx.cn
      # Drone服务器进行身份验证的共享密钥，和上面设置一样
      - DRONE_RPC_SECRET=xxxxxxxxx
```

## 启动容器

```shell
# 在创建docker-compose.yml的文件夹下启动
docker-compose up -d
```
如果配置没问题，启动基本都是没问题的。

接下来访问域名：https://ci.xxx.cn如果可以正常访问，就代表已经完成部署了
