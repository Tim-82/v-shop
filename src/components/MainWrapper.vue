<template>
  <div class="main-wpapper">
    <Catalog/>
    <Cart
      v-if="CART.length"
      :cart_data="CART"
    />
  </div>
</template>

<script>
import Catalog from './Catalog'
import Cart from './Cart'
import { mapGetters } from 'vuex'

export default {
  name: 'main-wpapper',
  components: { Catalog, Cart },
  props: {},
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['CART'])
  }
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
