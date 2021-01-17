<template>
  <div class="tabs-body-wrapper">
      <slot></slot>
  </div>
</template>

<script>
export default {
   name: 'PandaTabsBody',
   inject: ['eventBus'],
}
</script>

<style>
  .tabs-body-wrapper{

  }
</style>