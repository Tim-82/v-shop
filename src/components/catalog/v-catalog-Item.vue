<template>
  <div class="catalog-item">
    <div class="image">
      <img :src=" require('../../assets/images/' + product_data.image) " alt="">
      <p class="catalog-item__name">{{product_data.name}}</p>
      <p class="catalog-item__price">Price: {{product_data.price}} P</p>
      <span
        :class="{'rating-active' :checkRating(star, product_data)}"
        v-for="star in 5"
        :key="star.id"
      >
        &#9734;
      </span>
      <button class="catalog_item_add_to_cart_btn" @click="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'catalog-item',
  props: {
    product_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    checkRating (s, myProduct) {
      return myProduct.rating - s >= 0
    },
    addToCart () {
      this.$emit('addToCart', this.product_data)
    }
  }
}
</script>

<style lang="scss">
  .catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0;
    padding: $padding*2;
    margin-bottom: $margin*2;
  }
  .image {
    // width: 100px;
    // height: 50px;
  }
  .rating-active:before {
    content: "\2605";
    position: absolute;
}
</style>
