# icestark-example

微前端应用案例

- application 主应用
  - 自有路由
    - /dashboard
    - /example
  - micro-angular 子应用路由
    - /module-angular/resident
    - /module-angular/equipment
    - /module-angular/setting
  - micro-vue 子应用路由
    - /module-vue/home
    - /module-vue/about
- micro-angular 微应用（Vue@3+Vite）
  - 自有路由
    - /resident
    - /equipment
    - /setting
- micro-vue 微应用（Angular@13）
  - 自有路由
    - /home
    - /about

## 运行

1. 应用`micro-angular`微应用

- 运行 npm run static 启动 micro-angular 静态服务

1. 应用`micro-vue`微应用

- 构建 micro-vue 项目
- 将 dist 拷贝到 application 项目的 public 目录下，并重命名为 module-vue

1. 启动主应用

- 运行 npm run dev
