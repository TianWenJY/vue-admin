import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../page/Login/Login.vue'
import Nav from '../page/Nav/Nav'
import Base64 from '../../static/Base64.min'
import Echarts from '../../static/echarts.min'
import Qrcode from '../../static/qrcode.min'
// import Validate from '../../static/validate'

import VueResource from 'vue-resource'
import Index from  '../page/index/Index'


// import jQuery from 'jQuery'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Nav)


export default new VueRouter({
  routes: [
    {name: Login, path: '/', component: Login},
    {
      name: Index, path: '/index' ,component: Index,
     children: [
       {name: Nav, path:'/idnex/nav' , component:Nav}
     ]
    }
  ]
})
