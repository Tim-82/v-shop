<template>
<div>
  <Popup
    v-if="infoPopupVisible"
    @closePopup="closePopup"
    @addBtn="addToCart"
    :main_image="product_data.image"
    :name="product_data.name"
    :all_images="product_data.all_images"
  />
    <div class="card shadow mb-3">
      <router-link :to="{name:'catalog_item_page', params: {id: product_data.article}}">
        <img  :src="require(`@/assets/images/shoes/${product_data.image}`) " alt="image" class="img-fluid card-img-top">
      </router-link>
      <div class="card-body">
        <h5 class="card-title">{{ product_data.name }}</h5>
        <h6>
          <i class="far fa-star"
            v-for="star in 5"
            :key="star.id"
            :class="{'fas fa-star' :checkRating(star, product_data.rating)}"
            >
          </i>
        </h6>
        <h5>
          <small><s class="text-secondary">${{ product_data.previous_price }}</s></small><br>
          <span class="price">Price: {{product_data.price | filter | priceFormat}}</span>
        </h5>

        <button
          type="button"
          class="btn btn-warning my-3"
          name="add"
          @click="addToCart"
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
</template>

<script>
import Popup from './v-popup'
import filter from '@/filters/filter'
import priceFormat from '@/filters/price-format'

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
      // product_image: this.product_data.image
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
    addToCart () {
      this.$emit('addToCart', this.product_data)
    },
    showPopupInfo () {
      this.infoPopupVisible = true
    },
    closePopup () {
      this.infoPopupVisible = false
    },
    // changeCartImg (e) {
    //   this.product_image = this.pct[e].value
    //   // console.log(this.pct[e].value)
    // },
    productClick () {
      this.$emit('productClick', this.product_data.article)
    }
  }
}
</script>

<style scoped>
img {
  height: 200px;
  cursor: pointer;
  }

  .fa-star{
    color: yellowgreen;
    padding: 3%;
  }
</style>
