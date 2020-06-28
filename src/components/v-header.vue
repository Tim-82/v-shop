<template>
  <div class="header">
    <header id="header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link :to="{name: 'mainPage'}" class="navbar-brand">
          <h3 class="px-5">
            <i class="fas fa-shopping-basket mr-2"></i>Shopping Cart
          </h3>
        </router-link>
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

      <div class="search-field">
        <input type="text" v-model="searchValue">
        <button class="search_btn">
          <i class="material-icons" @click="search">search</i>
        </button>
        <button class="search_btn">
          <i class="material-icons" @click="clearSearchField">cancel</i>
        </button>
      </div>
    </header>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'v-header',
  data () {
    return {
      searchValue: ''
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
    ]),
    search () {
      this.SET_SEARCH_VALUE(this.searchValue)
      if (this.$route.path !== '/catalog') {
        this.$router.push('/catalog')
      }
    },
    clearSearchField () {
      this.searchValue = ''
      this.SET_SEARCH_VALUE()
      if (this.$route.path !== '/catalog') {
        this.$router.push('/catalog')
      }
    }
  }
}
</script>

<style scoped>
  #cart_count {
    text-align: center;
    padding: 0 0.9rem 0.1rem 0.9rem;
    border-radius: 3rem;
  }
  /* header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: green;
    padding: 16px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }
  img {
    width: 50px;
  } */
  .search-field {
    padding: 16px;
    position: relative;
    right: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search_btn {
    margin-left: 16px;
    background: transparent;
    border: none;
  }
</style>
