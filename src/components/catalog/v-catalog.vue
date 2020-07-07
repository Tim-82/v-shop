<template>
  <div>
    <Notification
      :messages="messages"
    />
    <div class="filters">
      <Select
        :selected="selected"
        :options="categories"
        @select="sortByCategories"
      />
      <div class="range-slider">
        <input
          type="range"
          min="0"
          max="100"
          step="10"
          v-model.number="minPrice"
          @change="setRangeSlider"
        >
        <input
          type="range"
          min="0"
          max="100"
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
    <div class="container">
      <div class="row text-center py-5">
          <div class="col-md-3 col-sm-6 my-3 my-md-0"
            v-for="product in filteredProducts"
            :key="product.article"
          >
            <CatalogItem
              :product_data="product"
              @addToCart="addToCart"
              @productClick="productClick"
            />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogItem from './v-catalog-Item'
import { mapActions, mapGetters } from 'vuex'
import Select from '../v-select.vue'
import Notification from '../notifications/v-notification'

export default {
  name: 'Catalog',
  components: {
    CatalogItem,
    Select,
    Notification
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
      maxPrice: 100,
      messages: []
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'SEARCH_VALUE'
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
        .then(() => {
          const timeStamp = Date.now().toLocaleString()
          this.messages.unshift(
            { name: 'Product added to cart', id: timeStamp }
          )
        })
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
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          vm.selected = category.name
          return item.category === category.name
        })
      }
    },
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
    sortedProductsBySearchValue (value) {
      this.sortedProducts = [...this.PRODUCTS]
      if (value) {
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          return item.name.toLowerCase().includes(value.toLowerCase())
        })
      } else {
        this.sortedProducts = this.PRODUCTS
      }
    },
    productClick (article) {
      this.$router.push({ name: 'product', query: { product: article } })
    }
  },
  watch: {
    SEARCH_VALUE () {
      this.sortedProductsBySearchValue(this.SEARCH_VALUE)
    }
  },
  mounted () {
    this.GET_PRODUCTS_FROM_API()
      .then((responce) => {
        if (responce.data) {
          this.sortByCategories()
          this.sortedProductsBySearchValue(this.SEARCH_VALUE)
        }
      })
  }
}
</script>

<style scoped>
  .filters {
    display: flex;
    justify-content: space-around;
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
