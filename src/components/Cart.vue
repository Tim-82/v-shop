<template>
  <div class="cart">
    <router-link :to="{name: 'catalog'}">
      <div class="catalog_link_to_cart">Back to Catalog</div>
    </router-link>
    <H1>Cart</H1>
    <p v-if="!cart_data.length">There are no products in cart</p>
    <CartItem
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import CartItem from './Cart-Item'
import { mapActions } from 'vuex'

export default {
  name: 'cart',
  components: { CartItem },
  props: {
    cart_data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART'
    ]),
    deleteFromCart (index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style scoped>

</style>
