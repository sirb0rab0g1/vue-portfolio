// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Components from '@/components/index'
import VueParticles from 'vue-particles'
import './stylus/main.styl'
import FlatSurfaceShader from 'vue-flat-surface-shader'
// Import store
import store from './store'

Vue.use(Vuetify)
Vue.use(VueParticles)
Vue.use(FlatSurfaceShader)
Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})

Vue.prototype.$eventHub = new Vue()  // Global event bus

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  store,
  template: '<App/>'
})
