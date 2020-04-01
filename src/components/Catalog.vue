<template>
  <div class="catalog">
    <router-link
      :to="{
        name: 'cart',
        params: {cart_data: CART}}"
    >
      <div class="catalog_link_to_cart">Cart: {{CART.length}}</div>
    </router-link>
    <div class="catalog-list">
       <CatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
       />
    </div>
  </div>
</template>

<script>
import CatalogItem from './Catalog-Item'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Catalog',
  components: { CatalogItem },
  props: {},
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
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
