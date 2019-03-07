// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import mock from './mock'
Vue.use(elementui)
Vue.use(VueAxios,Axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
