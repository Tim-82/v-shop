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
    <div class="cart_total">
      <p class="total_name">Total:</p>
      <p>{{ cartTotalCost }} $</p>
    </div>
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
  computed: {
    cartTotalCost () {
      let result = []

      if (this.cart_data.length) {
        for (const item of this.cart_data) {
          result.push(item.price * item.quantity)
        }
        result = result.reduce(function (sum, el) {
          return sum + el
        })
        return result
      } else {
        return 0
      }
    }
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
  .cart_total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding*2 $padding*3;
    display: flex;
    justify-content: center;
    background: #26ae68;
    color:#ffffff;
    font-size: 20px;
  }

  /* .total_name{
    .margin-right: $margin*2;
  } */
</style>
