import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchValue: '',
    // mobile: false,
    // desktop: true,
    products: [],
    cart: []
    // notifications: []
  },
  mutations,
  actions,
  getters
})
