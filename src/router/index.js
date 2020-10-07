import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/views/MainPage.vue'

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
    component: () => import('@/views/Catalog.vue')
  },
  {
    path: '/catalog_item',
    name: 'catalog_item_page',
    component: () => import('@/views/CatalogItemPage.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart.vue'),
    props: true
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
