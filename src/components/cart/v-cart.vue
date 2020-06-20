<template>
<div>
  <div class="container-fluid  mt-3">
    <div class="row px-5">
      <div class="col-md-7">
        <div class="shopping-cart">
          <h6>My Cart</h6>
          <router-link :to="{name: 'catalog'}">
            <div class="catalog_link_to_cart">Back to Catalog</div>
          </router-link>
          <hr>
            <h1 v-if="!cart_data.length">There are no products in cart</h1>
            <CartItem
              v-for="(data, index) in cart_data"
              :key="index"
              :cart_item_data="data"
              @deleteFromCart="deleteFromCart(index)"
              @increment="increment(index)"
              @decrement="decrement(index)"
            />
       </div>
      </div>
      <div class="col-md-4 offset-md-1 border rounded mt-5 bg-white h-25">
        <div class="pt-4">
          <h6 class="text-center">Price Details</h6>
          <hr>
          <div class="row price-details">
            <div class="col-md-6">
              <h6>Delivery Charges</h6>
              <hr>
              <h6>Total:</h6>
            </div>
            <div class="col-md-6">
              <h6 class="text-success">FREE</h6>
              <hr>
              <h6>{{ cartTotalCost | filter|  priceFormat }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import CartItem from './v-cart-Item'
import { mapActions } from 'vuex'
import filter from '../filters/filter'
import priceFormat from '../filters/price-format'

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
  filters: {
    filter,
    priceFormat
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
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'
    ]),
    increment (index) {
      this.INCREMENT_CART_ITEM(index)
    },
    decrement (index) {
      this.DECREMENT_CART_ITEM(index)
    },
    deleteFromCart (index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style scoped>
.price-details h6 {
  padding: 3% 2%;
}
</style>
