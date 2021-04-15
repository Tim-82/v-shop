<template>
  <div class="card">
    <div class="top-section">
      <div class="img-magnifier-container">
      <img
        v-if="product.image"
        id="myimage"
        :src="require(`@/assets/images/shoes/${product.image}`)"
        alt="img"
        class="image-container"
        width="600"
        height="400"
      />
      </div>
    </div>
    <div class="product-info">
      <p>Product name: {{product.name}}</p>
      <p>Article: {{product.article}}</p>
      <p>Price: {{product.price | filter }}</p>
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
import { mapActions } from 'vuex'
import filter from '@/filters/filter'
// import magnifier from '../mixins/magnifier'

export default {
  name: 'v-product-page',
  props: {},
  data () {
    return {
      product: null
    }
  },
  filters: {
    filter
  },
  methods: {
    ...mapActions([
      // 'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addBtn () {
      this.ADD_TO_CART(this.product)
    }
  },
  mounted () {
    const id = this.$route.params.id
    this.product = this.$store.getters.GET_PRODUCT(id)
    // magnifier('myimage', 3)
  }
}
</script>

<style scoped>
* {box-sizing: border-box;}
.card {
  display: flex;
  align-items: center;
  background: white;
}
.image-container{
  height:500px;
}
.btn {
  /* display: block; */
  width: 200px;
  background: #f6c007;
  text-align: center;
  color: #333;
  padding: 10px;
  margin: 50px;
  transition: 0.3s;
}

.btn:hover{
  background: #DEB887;
  text-decoration: none;
}

/* .img-magnifier-container {
  position: relative;
} */

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
