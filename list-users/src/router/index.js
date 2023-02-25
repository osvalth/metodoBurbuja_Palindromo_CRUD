import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/ListUsers.vue'
import MetodoBurbuja from '../views/metodoBurbuja.vue'
import Palindromo from '../views/Palindromo.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/burbuja',
    name: 'Método Burbuja',
    component: MetodoBurbuja
  },
  {
    path: '/palindromo',
    name: 'Palíndromo',
    component: Palindromo
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
