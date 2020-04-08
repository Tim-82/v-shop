import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from '../components/catalog/v-catalog.vue'
import Cart from '../components/cart/v-cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
