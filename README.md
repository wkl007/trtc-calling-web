# trtc-calling-web

## 介绍

本项目基于`Vue 3.0`，`ant design vue`，`TypeScript` 开发的腾讯云`TRTCCalling` Demo。Demo中包含语音通话和视频通话场景：

- 语音通话：纯语音交互，支持多人互动语音聊天。
- 视频通话：视频通话，面向在线客服等需要面对面交流的沟通场景。

参考项目：[trtc-calling-web](https://github.com/tencentyun/TRTCSDK/tree/master/Web/TRTCScenesDemo/trtc-calling-web)

## 环境要求

* 请使用最新版本的 Chrome 浏览器。
* `TRTCCalling` 依赖以下端口进行数据传输，请将其加入防火墙白名单。
  - TCP 端口：8687
  - UDP 端口：8000，8080，8800，843，443，16285
  - 域名：qcloud.rtc.qq.com

> - 一般情况下体验 Demo 需要部署至服务器，通过 https://域名/xxx 访问，或者直接在本地搭建服务器，通过 localhost:端口访问。
> - 目前桌面端 Chrome 浏览器支持 TRTC 桌面浏览器 SDK 的相关特性比较完整，因此建议使用 Chrome 浏览器进行体验。

## 在线预览

https://wkl007.github.io/trtc-calling-web

## 本地调试

1. 克隆项目，终端进入项目根目录

```powershell
git clone https://github.com/wkl007/trtc-calling-web.git
```

2. 安装项目依赖

```powershell
yarn install
```

3. 启动项目

```
yarn serve
```

4. 打包项目

```
yarn build
```

## 运行效果

登录页

![image-20201216090313293](https://pic-go-1256738511.cos.ap-chengdu.myqcloud.com/images/20201216090323.png)

视频通话

![image-20201216093803450](https://pic-go-1256738511.cos.ap-chengdu.myqcloud.com/images/20201216093806.png)

语音通话

![截屏2020-12-16 上午9.08.34](https://pic-go-1256738511.cos.ap-chengdu.myqcloud.com/images/20201216091110.png)