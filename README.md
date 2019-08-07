# vue-CNodeJs
###### github预览界面：[CNodeJs](https://ninthop.github.io/vue-demo-CNode/dist)
###### 码云预览界面//载入速度快：[CNodeJs-码云](http://ninthop.gitee.io/vue-demo-cnode)
###### 根据CNodeJs提供的[Api](https://cnodejs.org/api)，实现了主页、详情页、用户页。

### 技术栈
- vue-cli3
- Axios
- Vuex
- Stylus
- element-ui　　//仅按需引入了loading功能

### 插件
- fastClick　　//解决点击300ms延迟问题

### 待修缮
- ~~还没有封装axios~~，代码冗余　　//封装了一个简易的axios，参考[网址](https://juejin.im/post/5b55c118f265da0f6f1aa354#heading-5)
- 还没写注释
- 部分代码不优雅，观赏性差，想到什么写什么
- 代码规范没有严格遵守

```
├── src
│   ├── assets                   // 样式及静态资源
│   ├── common                   // 动画方法
│   ├── components
│   │   ├──Home                  // 主页组件
│   │   ├──Topic                 // 详情页组件及部分用户页共用组件
│   │   ├──Header.vue            // 全局首页
│   ├── lib                      // axios、http封装及公用方法
│   ├── router                   // 路由
│   ├── store                    // 状态管理
│   ├── views
│   |   ├── Home                 // 主页
│   |   ├── Topic                // 详情页
│   │   ├── User                 // 用户页
│   ├── App.vue
│   └── main.js
├── babel.config.js              // 按需引入组件的配置
├── package.json                 // 项目依赖
└── vue.config.js                // vue-cli 3.0配置
```

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```