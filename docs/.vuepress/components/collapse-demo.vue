<template>
  <div>
    <i-collapse :selected.sync="selected">
      <i-collapse-item title="标题1" name="1">1</i-collapse-item>
      <i-collapse-item title="标题2" name="2">2</i-collapse-item>
      <i-collapse-item title="标题3" name="3">3</i-collapse-item>
    </i-collapse>
  </div>
</template>

<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'
export default {
  components:{
    'i-collapse': Collapse,
    'i-collapse-item': CollapseItem,
  },
  data(){
    return{
      selected: ['1']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>