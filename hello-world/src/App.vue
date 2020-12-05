<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <g-button>欢迎使用熊猫ui</g-button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { Button, ButtonGroup, Icon } from "shawnjon-test-1";
import "shawnjon-test-1/dist/index.css";
export default {
  name: "App",
  components: {
    HelloWorld,
    "g-button": Button,
  },
};
</script>

<style>
:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
