export default {
  PRODUCTS (state) {
    return state.products
  },
  CART (state) {
    return state.cart
  },
  SEARCH_VALUE (state) {
    return state.searchValue
  },
  GET_PRODUCT: (state) => (id) => {
    return state.products.find(product => product.id === id)
  }
}
