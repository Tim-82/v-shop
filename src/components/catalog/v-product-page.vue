<template>
  <div class="card">
    <div class="top-section">
      <img v-if="product.image" :src=" require('../../assets/images/shoes/' +product.image ) " alt="img" class="image-container">
    </div>
    <div class="product-info">
      <p>Product name: {{product.name}}</p>
      <p>Article: {{product.article}}</p>
      <p>Price: {{product.price | filter | priceFormat }}</p>
      <div>
        <button class="btn"  @click="addBtn">Add to Cart</button>
        <router-link :to="{name: 'catalog'}">
          <button class="btn">Back to Catalog</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import filter from '../filters/filter'
import formattedPrice from '../filters/price-format'
// import { magnifiergGlass } from '@/mixins/magnifiergGlass'

export default {
  name: 'v-product-page',
  props: {},
  data () {
    return {}
  },
  filters: {
    formattedPrice,
    filter
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ]),
    product () {
      let result = {}
      const vm = this
      this.PRODUCTS.find(function (item) {
        if (item.article === vm.$route.query.product) {
          result = item
        }
      })
      return result
    }
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addBtn () {
      this.ADD_TO_CART(this.product)
    }
  },
  mounted () {
    if (!this.PRODUCTS.length) {
      this.GET_PRODUCTS_FROM_API()
    }
  }
  // mixins: [magnifiergGlass]
}
</script>

<style scoped>
.card {
  width: 100%;
  background: white;
}
.image-container{
  height:500px;
}
.btn {
  display: block;
  width: 200px;
  background: #f6c007;
  text-align: center;
  color: #333;
  padding: 10px;
  margin-top: 10px;
  transition: 0.3s;
}

button:hover{
  background: #DEB887;
  text-decoration: none;
}

* {box-sizing: border-box;}

.img-magnifier-container {
  position:relative;
}

.img-magnifier-glass {
  position: absolute;
  border: 3px solid #000;
  border-radius: 50%;
  cursor: none;
  /*Set the size of the magnifier glass:*/
  width: 100px;
  height: 100px;
}
</style>
