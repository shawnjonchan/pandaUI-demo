# pandaUI - 一个 Vue UI 组件

[![Build Status](https://travis-ci.org/shawnjonchan/pandaUI-demo.svg?branch=main)](https://travis-ci.org/shawnjonchan/pandaUI-demo) 

作者： ShawnJonChan  

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 开始使用

1.添加 CSS 样式

  使用本框架前，请在 CSS 中开启 border-box

  ```
  *,*::before,*::after{box-sizing: border-box;}
  ```
  IE 8 及以上浏览器都支持此样式。

  你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
 
  ```
  :root {
    --button-height:32px;
    --font-size:14px;
    --button-bg: white;
    --button-active-bg:#eee;
    --border-radius:4px;
    --color:#333;
    --border-color:#999;
    --border-color-hover:#666;
        }
  ```

  IE 15 及以上浏览器都支持此样式。

2. 安装 panda-ui
   ```
   npm i -s shawnjon-test-1
   ```
3.引入 panda-ui
  ```
  import {Button, ButtonGroup, Icon,Col, Collapse, CollapseItem, Content, Footer, Header, Input, Layout, Popover
             , Row, Sider, Tabs, TabsHead, TabsBody, TabsItem, TabsPane, Toast,plugin
           } from 'init-ui'
    import 'panda-ui/dist/index.css'    
    import Vue from 'vue'
    Vue.use(plugin)
    
    export default {
      name: 'app',
      components: {
            'i-button':Button,
            'i-icon':Icon,
            'i-button-group':ButtonGroup,
            'i-col':Col,
            'i-collapse':Collapse,
            'i-collapse-item':CollapseItem,
            'i-content': Content,
            'i-footer': Footer,
            'i-header': Header,
            'i-input': Input,
            'i-layout': Layout,
            'i-popover': Popover,
            'i-row': Row,
            'i-sider': Sider,
            'i-tabs': Tabs,
            'i-tabs-head': TabsHead,
            'i-tabs-body': TabsBody,
            'i-tabs-item': TabsItem,
            'i-tabs-pane': TabsPane,
            'i-toast': Toast,
  ```
4.引入 svg symbols
```
<script src='//at.alicdn.com/t/font_2181237_w4qbmocr3ra.js'></script>
```

## 文档
[panda UI 官网](https://shawnjonchan.github.io/pandaUI-demo/)
## 提问
[issues](https://github.com/shawnjonchan/init-ui/issues)
## 变更记录

## 联系方式

## 贡献代码
