<template>
  <div>
    <Notification
      :messages="messages"
    />
    <div >
      <Filters
        @filter="filter"
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
    <h1 v-if="!filteredProducts.length" style="text-align:center;">There is nothing</h1>
    <h1 v-if="filteredProducts[0] == 'xxxs'" style="text-align:center;">x</h1>
  </div>
</template>

<script>
import CatalogItem from '@/components/v-catalog-Item'
import { mapActions, mapGetters } from 'vuex'
import Filters from '@/components/v-products-filters.vue'
import Notification from '@/components/v-notification'

export default {
  name: 'Catalog',
  components: {
    CatalogItem,
    Filters,
    Notification
  },
  data () {
    return {
      messages: [],
      filteredProducts: []
    }
  },
  computed: {
    ...mapGetters([
      'GET_PRODUCTS',
      'GET_SEARCH_VALUE'
    ])
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

    filter (filter) {
      this.filteredProducts = this.$store.getters.GET_PRODUCTS_BY_FILTER(filter)
      // console.log(this.filteredProducts)
    }
  },

  created () {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>

<style scoped>
/* @import '../assets/styles/range_slider.css'; */

</style>
