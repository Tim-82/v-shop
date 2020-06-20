<template>
  <div>
    <!-- <form action="#" method="get" class="cart-items"> -->
      <div class="border rounded">
        <div class="row bg-white">
          <div class="col-md-3 po-5">
            <img :src="require('../../assets/images/' + cart_item_data.image)" alt="image" class="img-fluid">
          </div>
          <div class="col-md-6">
            <h5 class="pt-2">{{ cart_item_data.name }}</h5>
            <small class="text-secondary">{{cart_item_data.article}}</small>
            <h5 class="pt-2">{{cart_item_data.price | filter |  priceFormat}}</h5>
            <button type="button" class="btn btn-warning">Save for later</button>
            <button type="button" class="btn btn-danger mx-2" name="remove" @click="deleteFromCart">Remove</button>
          </div>
          <div class="col-md-3 py-5">
            <button type="button" class="btn bg-light border rounded-circle" @click="decrementItem"><i class="fas fa-minus"></i></button>
              <input type="text" :value="cart_item_data.quantity" class="form-control w-25 d-inline text-center">
            <button type="button" class="btn bg-light border rounded-circle" @click="incrementItem"><i class="fas fa-plus"></i></button>
          </div>
        </div>
      </div>
    <!-- </form> -->
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
  .shopping-cart {
    padding: 3% 0;
  }
  .cart-items + .cart-items {
    padding: 2%0;
  }
</style>
