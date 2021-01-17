<template>
  <button class="i-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
      <i-icon class="icon" v-if="icon && !loading" :icon-name="icon"></i-icon>
      <i-icon class="loading icon" v-if="loading" icon-name="loading"></i-icon>
      <div class="content">
        <slot></slot>
      </div>
  </button>
</template>

<script>
  import Icon from './icon'
  export default {
    // props: ['icon','iconPosition']
    name:"PandaButton",
    components:{
      'i-icon': Icon
    },
    props: {
      icon:{},
      loading:{
        type: Boolean,
        default: false
      },
      iconPosition:{
        type: String,
        default: 'left',
        validator(value){
          return value ==='left' || value ==='right'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
$font-size: 14px;
$button-height: 32px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
@keyframes spin {
  0%{transform: rotate(0deg);}
  100%{transform: rotate(360deg);}
}
  .i-button { font-size: $font-size; height: $button-height; padding: 0 1em; border-radius: $border-radius; border: 1px solid $border-color; background: $button-bg; display: inline-flex; justify-content: center; align-items: center; vertical-align: middle;
  &:after { content:''; color: red; display: none;}
  &:hover { border-color: $border-color-hover; }
  &:active { background-color: $button-active-bg; }
  &:focus { outline: none; }
  > .content { line-height: 1em; order: 2; }
  > .icon{ margin-right: .1em; order: 1; }
  
  &.icon-right{
    > .content {order: 1; line-height: 1em;}
    > .icon { order: 2; margin-right: 0; margin-left: .1em; }
  }
  .loading{ animation: spin 1.5s infinite linear; }
  }      
</style>