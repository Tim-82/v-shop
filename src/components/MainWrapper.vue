<template>
  <div class="main-wpapper">
    <keep-alive>
      <router-view />
    </keep-alive>
    <!-- <Catalog/>
    <Cart
      v-if="CART.length"
      :cart_data="CART"
    /> -->
  </div>
</template>

<script>
// import Catalog from './Catalog'
// import Cart from './Cart'

export default {
  name: 'main-wpapper',
  // components: { Catalog, Cart },
  props: {},
  data () {
    return {
    }
  },
  computed: {}
}
</script>

<style scoped>
  .main-wpapper {
    max-width: 900px;
    margin: 0 auto;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto; */
  }
</style>
