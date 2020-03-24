<template>
  <div class="catalog">
    <div class="catalog-list">
       <CatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
       />
    </div>
  </div>
</template>

<script>
import CatalogItem from './Catalog-Item'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Catalog',
  components: { CatalogItem },
  props: {},
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['PRODUCTS'])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ])
    // showCild () {
    //   console.log(data)
    // }
  },
  mounted () {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>

<style lang="scss">
  .catalog-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
</style>
