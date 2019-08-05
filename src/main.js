import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
import Level1 from './components/Level-1.vue'
import Home from './components/Home.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: "/", component: Home },
  { path: "/level/1", component: Level1 },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
