# icestark-example

微前端应用案例


- application 主应用
- micro-angular 微应用（Vue@3+Vite）
- micro-vue 微应用（Angular@13）

## 运行

1. 应用`micro-angular`微应用

- 构建打包micro-angular项目
- 运行 npm run static 启动micro-angular静态服务

1. 应用`micro-vue`微应用

- micro-vue项目
- 将dist拷贝到application项目的public目录下，并重命名为micro-vue

1. 启动主应用

- 运行 npm run dev