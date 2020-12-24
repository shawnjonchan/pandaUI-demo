module.exports = {
    title: '熊猫UI',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
            {text: '主页',lin: '/'},
            {text: '文档',lin: '/guide'},
            {text: '交流',lin: '/https://google.com'},
        ],
        sidebar: [
            {
              title: '入门',
              children: [
                  '/install/',
                  '/get-started/', 
              ]
            },
            {
              title: '组件',
              children: ['/components/button']
            },
        ]
    }
}