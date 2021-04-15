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
        <div class='range-slider'>
          <input type="range" min="0" max="100" step="1" v-model="sliderMin">
          <input type="range" min="0" max="100" step="1" v-model="sliderMax">
        </div>
        <!-- <input
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
        > -->
      </div>
      <div class="range-values">
        <input type="number" min="0" max="100" step="1" v-model="sliderMin" disabled>
        <input type="number" min="0" max="100" step="1" v-model="sliderMax" disabled>
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
            />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogItem from '@/components/v-catalog-Item'
import { mapActions, mapGetters } from 'vuex'
import Select from '@/components/v-select.vue'
import Notification from '@/components/v-notification'

export default {
  name: 'Catalog',
  components: {
    CatalogItem,
    Select,
    Notification
  },
  // props: {},
  data () {
    return {
      categories: [
        { name: 'All', value: 'all' },
        { name: 'Man', value: 'm' },
        { name: 'Woman', value: 'w' }
      ],
      selected: 'All',
      sortedProducts: [],
      messages: [],
      minAngle: 0,
      maxAngle: 100
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
    },
    sliderMin: {
      get: function () {
        var val = parseInt(this.minAngle)
        return val
      },
      set: function (val) {
        val = parseInt(val)
        if (val > this.maxAngle) {
          this.maxAngle = val
        }
        this.minAngle = val
        this.sortByCategories()
      }
    },
    sliderMax: {
      get: function () {
        var val = parseInt(this.maxAngle)
        return val
      },
      set: function (val) {
        val = parseInt(val)
        if (val < this.minAngle) {
          this.minAngle = val
        }
        this.maxAngle = val
        this.sortByCategories()
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
        return item.price >= vm.minAngle && item.price <= vm.maxAngle
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
    }
    // productClick (article) {
    //   this.$router.push({ name: 'catalog_item_page', query: { product: article } })
    // }
  },
  watch: {
    SEARCH_VALUE () {
      this.sortedProductsBySearchValue(this.SEARCH_VALUE)
    }
  },
  created () {
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
@import '../assets/styles/range_slider.css';
  .filters {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
