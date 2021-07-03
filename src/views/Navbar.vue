<template>
  <div class="header">
    <header id="header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link :to="{name: 'mainPage'}" class="navbar-brand">
          <h3 class="px-5">
            <i class="fas fa-shopping-basket mr-2"></i>Shopping Cart
          </h3>
        </router-link>

        <SEARCH
          :value="search"
          placeholder="Find your shoes"
          @search="search = $event"
        />

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="mr-auto"></div>
          <div class="navbar-nav">
            <router-link :to="{name: 'cart', params: {cart_data: CART}}" class="nav-item nav-link active">
              <h5 class="px-5 cart" v-if="CART.length">
                <i class="fas fa-shopping-cart"></i>Cart
                <span id="cart_count" class="text-primary bg-light ml-3">{{CART.length}}</span>
              </h5>
            </router-link>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SEARCH from '@/components/v-search.vue'

export default {
  name: 'v-header',
  components: {
    SEARCH
  },
  data () {
    return {
      search: ''
    }
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  },
  methods: {
    ...mapActions([
      'SET_SEARCH_VALUE'
    ])
  },
  watch: {
    search () {
      const v = this.search.toLowerCase()
      this.SET_SEARCH_VALUE(v)
    }
  }
}
</script>

<style scoped>
  .header {
    margin-bottom: 10px;
  }

  #cart_count {
    text-align: center;
    padding: 0 0.9rem 0.1rem 0.9rem;
    border-radius: 3rem;
  }
</style>
