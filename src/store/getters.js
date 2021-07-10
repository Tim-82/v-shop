import minBy from 'lodash/minBy'
import maxBy from 'lodash/maxBy'
import sortBy from 'lodash/sortBy'

export default {
  GET_PRODUCTS (state) {
    return state.products
  },
  CART (state) {
    return state.cart
  },
  GET_SEARCH_VALUE (state) {
    return state.searchValue
  },
  GET_PRODUCT: (state) => (id) => {
    console.log(id)
    return state.products.find(product => product.article === id)
  },
  MIN_PRODUCT: (state) => {
    return state.products.length
      ? minBy(state.products, 'price').price
      : 0
  },
  MAX_PRODUCT: (state) => {
    return state.products.length
      ? maxBy(state.products, 'price').price
      : 0
  },
  CLEAR_VALUE: (state) => {
    return state.clearValue
  },

  GET_PRODUCTS_BY_FILTER: state => filter => {
    // Фильтруем товары
    const filtered = state.products
    // По категории
      .filter(product => {
        return filter.selectCategory === 0 || product.category_id === filter.selectCategory
      })

    // По ценам
      .filter(product => {
        return Number(product.price) >= filter.minPrice && Number(product.price) <= filter.maxPrice
      })

    // По полю поиска
      .filter(product => {
        return filter.inputSearch === '' || product.title.toLowerCase().includes(filter.inputSearch.toLowerCase())
      })

    // По range-slider
      .filter(product => {
        return Number(product.price) >= filter.value[0] && Number(product.price) <= filter.value[1]
      })

    // Сортируем
    const sortKey = filter.selectSort.split(':')[0]
    const sortDir = filter.selectSort.split(':')[1]

    let sorted = sortBy(filtered, product => {
      return Number(product[sortKey])
    })

    // При необходимости сортируем в обратном направлении
    if (sortDir === 'desc') {
      sorted = sorted.reverse()
    }

    return sorted
  }

}
