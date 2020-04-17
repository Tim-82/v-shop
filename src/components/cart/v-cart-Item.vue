<template>
  <div class="cart-item">
    <img class="cart_item_image" :src=" require('../../assets/images/' + cart_item_data.image) " alt="">
    <div class="cart_item_info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price | filter |  priceFormat}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="cart-item-quantity">
      <p>Qty:</p>
      <span class="quantity_btn" @click="decrementItem">-</span>
        {{cart_item_data.quantity}}
      <span class="quantity_btn" @click="incrementItem">+</span>
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
import filter from '../filters/filter'
import priceFormat from '../filters/price-format'

export default {
  name: 'cart-item',
  props: {
    cart_item_data: {
      type: Object,
      default () {
        return {}
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
  computed: {},
  methods: {
    decrementItem () {
      this.$emit('decrement')
    },
    incrementItem () {
      this.$emit('increment')
    },
    deleteFromCart () {
      this.$emit('deleteFromCart')
    }
  },
  mounted () {
    this.$set(this.cart_item_data, 'quantity', 1)
  }
}
</script>

<style scoped>
  .cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px;
    /* padding: $padding*2;
    margin-bottom: $margin*2; */
  }

  .cart_item_image {
      max-width: 50px;
    }
  .quantity_btn {
    cursor: pointer;
  }
</style>
