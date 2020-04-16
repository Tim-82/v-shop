<template>
  <div class="catalog-item">
    <Popup
      v-if="infoPopupVisible"
      :popupTitle="product_data.name"
      @closePopup="closePopup"
      @rightBtnAction="addToCart"
    >
      <img class="catalog-item__image" :src=" require('../../assets/images/' + product_data.image) " alt="img">
      <div>
        <p class="catalog-item-name">{{product_data.name}}</p>
        <p class="catalog-item-price">Price: {{product_data.price | toFix | formattedPrice}} Р.</p>
        <p class="catalog-item-price">{{product_data.category}}</p>
      </div>
    </Popup>
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
      <button
        class="catalog-item-show-info"
        @click="showPopupInfo"
      >
        Show info
      </button>
      <button class="catalog_item_add_to_cart_btn" @click="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<script>
import Popup from '../popup/v-popup'
export default {
  name: 'catalog-item',
  components: { Popup },
  props: {
    product_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      infoPopupVisible: false
    }
  },
  methods: {
    checkRating (s, myProduct) {
      return myProduct.rating - s >= 0
    },
    addToCart () {
      this.$emit('addToCart', this.product_data)
    },
    showPopupInfo () {
      this.infoPopupVisible = true
    },
    closePopup () {
      this.infoPopupVisible = false
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
