import axios from 'axios'

export default {
  GET_PRODUCTS_FROM_API ({ commit }) {
    return axios('http://localhost:3000/products', { method: 'GET' })
      .then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data)
        return products
      })
      .catch((error) => {
        console.log(error)
        return error
      })
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
  SET_MOBILE ({ commit }) {
    commit('SWITCH_MOBILE')
  },
  SET_DESKTOP ({ commit }) {
    commit('SWITCH_DESKTOP')
  },
  SET_SEARCH_VALUE ({ commit }, value) {
    commit('SET_SEARCH', value)
  }
}
