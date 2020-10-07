import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/v-main-page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: MainPage
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('@/components/catalog/v-catalog.vue')
  },
  {
    path: '/catalog_item',
    name: 'catalog_item',
    component: () => import('@/components/catalog/v-catalog-item-page.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/components/cart/v-cart.vue'),
    props: true
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
