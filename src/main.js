import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

Vue.config.productionTip = false

// Adding CursorFx plugin 
import CursorFx from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
Vue.use(CursorFx);

// add a vue-typer
import VueTyperPlugin from 'vue-typer';
Vue.use(VueTyperPlugin);

// add animated background
import VueParticlesBg from "particles-bg-vue";
Vue.use(VueParticlesBg);


new Vue({
  render: h => h(App),
}).$mount('#app')
