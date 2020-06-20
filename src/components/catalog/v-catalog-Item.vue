<template>
  <!-- <div class="catalog-item"> -->
<div class="container">
  <Popup
    v-if="infoPopupVisible"
    @closePopup="closePopup"
    @addBtn="addToCart"
  />
    <!-- <img class="catalog-item__image" :src=" require('../../assets/images/' + product_image) " alt="img">
      <div class="nav" v-for="(item, index) in pct" :key="index">
        <img :src=" require('../../assets/test/' + item.value)" alt="" class="image" @click="changeCartImg(index)">
      </div>
    <div>
      <p class="catalog-item-name">{{product_data.name}}</p>
      <p class="catalog-item-price">Price: {{product_data.price | filter |  priceFormat}} Р.</p>
      <p class="catalog-item-price">{{product_data.category}}</p>
    </div> -->
  <div class="row text-center py-5">
    <div class="col-md-3 col-sm-6 my-3 my-md-0"
      v-for="product in product_data"
      :key="product.article"
    >
      <div class="card shadow mb-3">
        <div>
          <img  :src=" require('../../assets/images/' + product.image) " alt="image" class="img-fluid card-img-top">
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <h6>
            <i class="far fa-star"
              :class="{'fas  fa-star checked' :checkRating(star, product.rating)}"
              v-for="star in 5"
              :key="star.id"
              >
            </i>
          </h6>
          <p class="card-text">
            Some quick example
          </p>
          <h5>
            <small><s class="text-secondary">${{ product.previous_price }}</s></small><br>
            <span class="price">Price: {{product.price | filter | priceFormat}}</span>
          </h5>

          <button
            type="button"
            class="btn btn-warning my-3"
            name="add"
            @click="addToCart(product)"
          >
              Add to Cart <i class="fas fa-shopping-cart"></i>
          </button>
          <button
            class="btn btn-info"
            @click="showPopupInfo"
          >
            Show info
          </button>
        </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import Popup from '../popup/v-test-popup'
import filter from '../filters/filter'
import priceFormat from '../filters/price-format'

export default {
  name: 'catalog-item',
  components: { Popup },
  props: {
    product_data: {
      type: Array,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      infoPopupVisible: false,
      product_image: this.product_data.image,
      pct: [
        { value: '1.png' },
        { value: '2.png' },
        { value: '3.png' }
      ]
    }
  },
  filters: {
    filter,
    priceFormat
  },
  methods: {
    checkRating (s, myProduct) {
      return myProduct - s >= 0
    },
    addToCart (data) {
      this.$emit('addToCart', data)
    },
    showPopupInfo () {
      this.infoPopupVisible = true
    },
    closePopup () {
      this.infoPopupVisible = false
    },
    changeCartImg (e) {
      this.product_image = this.pct[e].value
      console.log(this.pct[e].value)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
  background: lightblue;
  background: radial-gradient(white 30%, lightblue 70%);
  }

  .fa-star{
    color: yellowgreen;
    padding: 3%;
  }
  .checked {
    color: yellowgreen;
  }
  /* .catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0;
    padding: 2px;
    margin-bottom: 2px;
  } */
</style>
