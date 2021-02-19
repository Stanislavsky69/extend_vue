import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueRouter from "vue-router";
import Vuex from 'vuex';
import { BootstrapVue } from 'bootstrap-vue';


Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use( BootstrapVue )

import './assets/bootstrap.scss'


const ClientConfig = () => {
  return import(`../config.theme.${process.env.VUE_APP_THEME}.js`)
}

Vue.config.productionTip = false

ClientConfig().then(response => {
  const { default: config } = response
  const router = new VueRouter(config.vueRouterConfig)
  const store =  new Vuex.Store(config.store)

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})


