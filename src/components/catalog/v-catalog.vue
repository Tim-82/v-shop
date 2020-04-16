<template>
  <div class="catalog">
    <router-link
      :to="{
        name: 'cart',
        params: {cart_data: CART}}"
    >
      <div class="catalog_link_to_cart">Cart: {{CART.length}}</div>
    </router-link>
    <div class="filters">
      <Select
        :selected="selected"
        :options="categories"
        @select="sortByCategories"
        :expanded="DESKTOP"
      />
      <div class="range-slider">
        <input
          type="range"
          min="0"
          max="6000"
          step="10"
          v-model.number="minPrice"
          @change="setRangeSlider"
        >
        <input
          type="range"
          min="0"
          max="6000"
          step="10"
          v-model.number="maxPrice"
          @change="setRangeSlider"
        >
      </div>
      <div class="range-values">
        <p>Min: {{ minPrice }}</p>
        <p>Max: {{ maxPrice }}</p>
      </div>
    </div>
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
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 6000
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART',
      'DESKTOP'
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
    addToCart (data) {
      this.ADD_TO_CART(data)
    },
    setRangeSlider () {
      if (this.minPrice > this.maxPrice) {
        const tmp = this.maxPrice
        this.maxPrice = this.minPrice
        this.minPrice = tmp
      }
      this.sortByCategories()
    },
    sortByCategories (category) {
      const vm = this
      this.sortedProducts = [...this.PRODUCTS]
      this.sortedProducts = this.sortedProducts.filter(function (item) {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice
      })
      if (category) {
        this.sortedProducts = this.sortedProducts.filter(function (e) {
          vm.selected = category.name
          return e.category === category.name
        })
      }
    }
    // sortByCategories (category) { -----FOR-single-Select---)
    //   this.sortedProducts = []
    //   let vm = this
    //   this.PRODUCTS.map(function (item) {
    //     if( item.category === category.name) {
    //       vm.sortedProducts.push(item)
    //     }
    //   })
    //   this.selected = category.name
    // }
  },
  mounted () {
    this.GET_PRODUCTS_FROM_API()
      .then((responce) => {
        if (responce.data) {
          console.log('Data arrived')
          this.sortByCategories()
        }
      })
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
  .filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .range-slider {
    width: 200px;
    margin: auto 16px;
    text-align: center;
    position: relative;
  }
  .range-slider svg, .range-slider input[type=range] {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
  }
</style>
