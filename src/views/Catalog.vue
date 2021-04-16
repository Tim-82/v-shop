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

      <RangeSlider
        :min = "minAngle"
        :max = "maxAngle"
        @search="minAngle = $event"
        @sort="sortByCategories"
      />

      <RangeValues
        :min = "minAngle"
        :max = "maxAngle"
      />
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
import RangeSlider from '@/components/v-range-slider'
import RangeValues from '@/components/v-range-values'

export default {
  name: 'Catalog',
  components: {
    CatalogItem,
    Select,
    Notification,
    RangeSlider,
    RangeValues
  },
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
