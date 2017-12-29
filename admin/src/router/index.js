import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import jQuery from '../../static/jquery-3.2.1.min'
import Base64 from '../../static/Base64.min'
import Echarts from '../../static/echarts.min'
import Qrcode from '../../static/qrcode.min'
import Validate from '../../static/validate'
import Login from '../page/Login/Login.vue'
// import jquery from 'jQuery'
// import jQuery from 'jQuery'

Vue.use(Router)
Vue.use(jQuery)
// Vue.use(BootStrap)
Vue.use(Base64)
Vue.use(Echarts)
Vue.use(Validate)

export default new Router({
  routes: [
    {name: Login, path: '/', component: Login},
  ]
})
