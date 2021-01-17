<template>
  <div class="tabs-wrapper">
    <i-tabs :selected.sync="selectedTab">
      <i-tabs-head>
        <i-tabs-item name='sports'>
          <i-icon icon-name="settings"></i-icon>
          体育
        </i-tabs-item>
        <i-tabs-item name='finance'>财经</i-tabs-item>
        <i-tabs-item name='technology'>科技</i-tabs-item>
        <i-tabs-item name='entertainment' disabled>娱乐</i-tabs-item>
      </i-tabs-head>
      <i-tabs-body>
        <i-tabs-pane name='sports'>体育资讯</i-tabs-pane>
        <i-tabs-pane name='finance'>财经资讯</i-tabs-pane>
        <i-tabs-pane name='technology'>科技资讯</i-tabs-pane>
        <i-tabs-pane name='entertainment'>娱乐资讯</i-tabs-pane>
      </i-tabs-body>
    </i-tabs>
  </div>
</template>

<script>
  import Tabs from '../../../src/tabs'
  import TabsBody from '../../../src/tabs-body'
  import TabsHead from '../../../src/tabs-head'
  import TabsItem from '../../../src/tabs-item'
  import TabsPane from '../../../src/tabs-pane'
  import Icon from '../../../src/icon'
  
  export default {
    components: {
      'i-tabs': Tabs, 'i-tabs-head': TabsHead, 'i-tabs-body': TabsBody, 'i-tabs-item': TabsItem,
      'i-tabs-pane': TabsPane, 'i-icon': Icon
    },
    data() { return { selectedTab: 'sports' } }
  }
</script>

<style lang="scss" scoped>
</style>