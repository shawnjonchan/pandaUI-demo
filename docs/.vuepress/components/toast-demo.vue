<template>
  <div>
    <i-button @click="zIndex">设置 zIndex</i-button>&nbsp;
    <i-button @click="autoClose">会自动关闭</i-button>&nbsp;
    <i-button @click="handClose">点击按钮后关闭</i-button>&nbsp;
    <i-button @click="createdHtml">支持 HTML 语法</i-button>&nbsp;
    <br>
    <i-button @click="top">上方弹出</i-button>
    <i-button @click="middle">中间弹出</i-button>
    <i-button @click="bottom">下方弹出</i-button>
  </div>
</template>

<script>
import Vue from 'vue'
import Toast from '../../../src/toast'
import Button from '../../../src/button'
import plugin from '../../../src/plugin'
Vue.use(plugin)

export default {
  components: {
    'i-toast': Toast,
    'i-button': Button 
    },
  methods: {
     zIndex(){
        this.$toast('我是 toast 设置zIndex内容',{
          zIndex: 30,
          autoClose: 5,
          closeButton: {
              text:'确定',
                callback:()=>{
                  console.log('回调的输出')
                }
            },
            enableHtml: false
        })
     },
     autoClose(){
        this.$toast('我是 toast 自动关闭内容',{
            autoClose: 5,
            enableHtml: false
        })
     },
     handClose(){
       this.$toast('我是 toast 手动关闭内容',{
         autoClose: null,
         closeButton: {
              text:'关闭',
              callback: undefined
         }
       })
     },
     createdHtml(){
       this.$toast('<span>段落 <strong>正文 </strong><a href="https://www.baidu.com">百度一下 </a></span>',{
         enableHtml:true,
      })
     },
     top(){
        this.$toast('我是 toastTop 内容',{ position: 'top' })
     },
     middle(){
        this.$toast('我是 toastMiddle 内容',{ position: 'middle' })
     },
     bottom(){
        this.$toast('我是 toastBottom 内容',{ position: 'bottom'})
     }
  }
}
</script>

<style lang="scss" scoped>

</style>