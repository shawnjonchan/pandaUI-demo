<template>
  <div class="popover-wrapper">
    <i-popover position="top">
      <template slot="content">
        在 button 上方显示内容
      </template>
      <i-button>上方显示内容</i-button>
    </i-popover>
    <i-popover position="bottom">
      <template slot="content">
        在 button 下方显示内容
      </template>
      <i-button>下方显示内容</i-button>
    </i-popover>
     <i-popover position="left">
      <template slot="content">
        在 button 左方显示内容
      </template>
      <i-button>左方显示内容</i-button>
    </i-popover>
     <i-popover position="right">
      <template slot="content">
        在 button 右方显示内容
      </template>
      <i-button>右方显示内容</i-button>
    </i-popover>
    <i-popover trigger="hover">
      <template slot="content">
        popover 中的内容
      </template>
      <i-button>hover 显示内容</i-button>
    </i-popover>
  </div>
</template>

<script>
  import Popover from '../../../src/popover'
  import Button from '../../../src/button'
  export default {
    components:{
      'i-popover': Popover,
      'i-button': Button
    }
  }
</script>

<style lang="scss" scoped>
</style>