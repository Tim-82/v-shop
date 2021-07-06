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
    <div class="product-info" v-if="product">
      <p>Product name: {{product.title}}</p>
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

export default {
  name: 'v-product-page',
  props: {},
  data () {
    return {
      test: null
    }
  },
  filters: {
    filter
  },
  computed: {
    product () {
      return this.$store.getters.GET_PRODUCT(this.$route.params.id)
    }
  },
  methods: {
    ...mapActions([
      'ADD_TO_CART'
    ]),
    addBtn () {
      this.ADD_TO_CART(this.product)
    }
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
</style>
