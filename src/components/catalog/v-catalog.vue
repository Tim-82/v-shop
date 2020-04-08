<template>
  <div class="catalog">
    <router-link
      :to="{
        name: 'cart',
        params: {cart_data: CART}}"
    >
      <div class="catalog_link_to_cart">Cart: {{CART.length}}</div>
    </router-link>
    <Select
      :selected="selected"
      :options="categories"
      @select="sortByCategories"
    />
    <div class="catalog-list">
       <CatalogItem
        v-for="product in filteredProducts"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
       />
    </div>
  </div>
</template>

<script>
import CatalogItem from './v-catalog-Item'
import { mapActions, mapGetters } from 'vuex'
import Select from '../v-select.vue'

export default {
  name: 'Catalog',
  components: {
    CatalogItem,
    Select
  },
  props: {},
  data () {
    return {
      categories: [
        { name: 'All', value: 'all' },
        { name: 'Man', value: 'm' },
        { name: 'Woman', value: 'w' }
      ],
      selected: 'All',
      sortedProducts: []
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ]),
    filteredProducts () {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.PRODUCTS
      }
    }
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    sortByCategories (category) {
      this.sortedProducts = []
      const context = this
      this.PRODUCTS.map(function (item) {
        if (item.category === category.name) {
          context.sortedProducts.push(item)
        }
      })
      this.selected = category.name
    },
    addToCart (data) {
      this.ADD_TO_CART(data)
    }
  },
  mounted () {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>

<style lang="scss">
  .catalog-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .catalog_link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding*2;
    border: solid 1px #aeaeae;
  }
</style>
