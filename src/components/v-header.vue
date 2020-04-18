<template>
  <div class="header">
    <router-link :to="{name: 'mainPage'}">
      <img src="../assets/logo.png" alt="">
    </router-link>
      <div class="search-field">
        <input type="text" v-model="searchValue">
        <button class="search_btn">
          <i class="material-icons" @click="search">search</i>
        </button>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'v-header',
  data () {
    return {
      searchValue: ''
    }
  },
  methods: {
    ...mapActions([
      'SET_SEARCH_VALUE'
    ]),
    search () {
      this.SET_SEARCH_VALUE(this.searchValue)
      this.$router.push('/catalog')
    }
  }
}
</script>

<style scoped>
  header {
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
  }
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
