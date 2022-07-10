<template>
  <div @mousemove="mousemove">
    <Notification
      :messages="messages"
    />
    <div >
      <Filters
        @filter="filter"
      />
    </div>

    <div class="container">
      <div class="row text-center py-5 products">
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
    },

    mousemove (e) {
      const mouseX = e.clientX
      const mouseY = e.clientY

      const products = document.querySelectorAll('.product')

      for (let i = 0; i < products.length; i++) {
        const product = products[i]

        const productImage = product.querySelector('.product-image-wrap')

        const imgX = mouseX - this.coords(productImage).x
        const imgY = mouseY - this.coords(productImage).y
        productImage.style.transform = `translateY(-${imgY / 40}px) translateX(-${imgX / 40}px) translateZ(100px)`

        const bgtext = product.querySelector('.bg-text')
        const bgX = mouseX - this.coords(bgtext).x
        const bgY = mouseY - this.coords(bgtext).y
        bgtext.style.transform = `translateX(${bgX / 25}px) translateX(-${bgY / 25}px)`
      }
    },
    coords (el) {
      const coords = el.getBoundingClientRect()

      return {
        x: coords.left / 2,
        y: coords.top / 2
      }
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
