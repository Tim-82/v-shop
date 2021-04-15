// import axios from 'axios'
import Localbase from 'localbase'
// import { Store } from 'vuex'
const db = new Localbase('db')

export default {
  GET_PRODUCTS_FROM_API ({ commit }) {
    db.collection('products').set(products).then(() => {
      db.collection('products').get().then(products => {
        commit('SET_PRODUCTS_TO_STATE', products)
      })
    })
  // GET_PRODUCTS_FROM_API ({ commit }) {
  //   return axios('http://localhost:3000/products', { method: 'GET' })
  //     .then((products) => {
  //       commit('SET_PRODUCTS_TO_STATE', products.data)
  //       return products
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       return error
  //     })
  },
  ADD_TO_CART ({ commit }, product) {
    commit('SET_CART', product)
  },
  INCREMENT_CART_ITEM ({ commit }, index) {
    commit('INCREMENT', index)
  },
  DECREMENT_CART_ITEM ({ commit }, index) {
    commit('DECREMENT', index)
  },
  DELETE_FROM_CART ({ commit }, index) {
    commit('DELETE_ITEM_FROM_CART', index)
  },
  SET_SEARCH_VALUE ({ commit }, value) {
    commit('SET_SEARCH', value)
  }
}

const products = [
  {
    image: 'Nike_Kyrie/NK_SPONGEBOB/SPONGEBOB_1.jpeg',
    all_images: ['Nike_Kyrie/NK_SPONGEBOB/SPONGEBOB_1.jpeg', 'Nike_Kyrie/NK_SPONGEBOB/SPONGEBOB_2.jpeg', 'Nike_Kyrie/NK_SPONGEBOB/SPONGEBOB_3.jpeg'],
    name: 'NIKE KYRIE 5 "SPONGEBOB"',
    info: 'Some products information',
    price: 99.753,
    previous_price: 105,
    article: 'T1',
    id: 'T1',
    available: true,
    rating: 3,
    category: 'Woman'
  },
  {
    image: 'Nike_Kobe/GRINCH_1.jpg',
    all_images: ['Nike_Kobe/GRINCH_1.jpg', 'Nike_Kobe/GRINCH_2.jpg', 'Nike_Kobe/GRINCH_3.jpg'],
    name: 'NIKE KOBE 6 PROTRO "GRINCH"',
    info: 'Some products information',
    price: 80.355,
    previous_price: 90,
    article: 'T2',
    id: 'T2',
    available: true,
    rating: 5,
    category: 'Man'
  },
  {
    image: 'Nike_Kyrie/NK_PATRICK/PATRICK_STAR_1.jpeg',
    all_images: ['Nike_Kyrie/NK_PATRICK/PATRICK_STAR_1.jpeg', 'Nike_Kyrie/NK_PATRICK/PATRICK_STAR_2.jpeg', 'Nike_Kyrie/NK_PATRICK/PATRICK_STAR_3.jpeg'],
    name: 'NIKE KYRIE 5 "PATRICK STAR"',
    info: 'Some products information',
    price: 75.1213,
    previous_price: 82,
    article: 'T3',
    id: 'T3',
    available: false,
    rating: 4,
    category: 'Woman'
  },
  {
    image: 'Nike_Kyrie/NK_DUKE/Duke_1.jpeg',
    all_images: ['Nike_Kyrie/NK_DUKE/Duke_1.jpeg', 'Nike_Kyrie/NK_DUKE/Duke_2.jpeg', 'Nike_Kyrie/NK_DUKE/Duke_3.jpeg'],
    name: 'NIKE KYRIE 5 "DUKE BLUE DEVILS"',
    info: 'Some products information',
    price: 65.6345,
    previous_price: 72,
    article: 'T4',
    id: 'T4',
    available: true,
    rating: 5,
    category: 'Man'
  }
]
