import Vue from 'vue'
import App from './App.vue'
import {Button,ButtonGroup,Icon} from 'shawnjon-test-1'

window.console.log(Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
