import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../page/Login/Login.vue'
import Base64 from '../../static/Base64.min'
import Echarts from '../../static/echarts.min'
import Qrcode from '../../static/qrcode.min'
// import Validate from '../../static/validate'
import ElemnetUi from 'element-ui'
import ElementCss from 'element-ui/lib/theme-chalk/index.css'

// import jQuery from 'jQuery'
Vue.use(VueRouter)
Vue.use(ElemnetUi)
Vue.use(ElementCss)


export default new VueRouter({
  routes: [
    {name: Login, path: '/', component: Login},
  ]
})
