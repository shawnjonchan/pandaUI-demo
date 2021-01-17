<template>
 <div class="button-wrapper">
   <i-button>默认按钮</i-button>    
   <i-button :loading="loading1" @click="loading1 = !loading1">默认按钮</i-button>
   <i-button icon="settings" 
   :loading="loading2" @click="loading2 = !loading2"
   >默认按钮</i-button>
   <i-button icon="settings" icon-position="right" :loading="loading3" @click="loading3 = !loading3">默认按钮</i-button>

   <i-button disabled>默认按钮</i-button>
 </div> 
</template>

<script>
import Vue from 'vue'
import Button from '../../../src/button'
import Icon from '../../../src/icon'

export default {
  components: {
      'i-button': Button,
      'i-icon': Icon
  },
  data(){
   return {
     loading1: false,
     loading2: true,
     loading3: false
     }
  }
}
</script>

<style lang="scss" scoped>
  .button-wrapper{
    padding: 0 10px;
  }
</style>