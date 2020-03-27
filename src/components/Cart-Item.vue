<template>
  <div class="cart-item">
    <img class="cart_item_image" :src=" require('../assets/images/' + cart_item_data.image) " alt="">
    <div class="cart_item_info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="cart-item-quantity">
      <p>Qty:</p>
      {{cart_item_data.quantity}}
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
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
  computed: {},
  methods: {
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
</style>
