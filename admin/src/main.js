// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jQuery from 'jQuery'
import ElemnetUi from 'element-ui'
import ElementCss from 'element-ui/lib/theme-chalk/index.css'

// import  BootStrap from 'bootstrap'

Vue.config.productionTip = false
Vue.use(jQuery)
Vue.use(ElemnetUi)
Vue.use(ElementCss)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
