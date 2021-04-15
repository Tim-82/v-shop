<template>
  <div
    class="card"
    ref="popup_wrapper"
  >
    <div class="top-section">
      <img :src=" require(`@/assets/images/shoes/${mainImage}`) "
        alt="img"
        class="image-container"
      >
    </div>
    <div class="product-info">
       <div class="nav">
        <img
          v-for="(image, index) in all_images"
          :key="index"
          :src=" require(`@/assets/images/shoes/${image}`) "
          alt=""
          @click="changeImg(image)"
        >
      </div>
      <div class="name">{{ name }}</div>
      <button class="add-btn"  @click="addBtn">Add to Cart</button>
      <div class="cl-btn" @click="closePopup"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'popup',
  components: {
  },
  props: {
    main_image: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    all_images: {
      type: Array,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      // show: true,
      // valid: true,
      mainImage: this.main_image
    }
  },
  methods: {
    changeImg (e) {
      this.mainImage = e
    },
    addBtn () {
      this.$emit('addBtn')
      this.closePopup()
    },
    closePopup () {
      this.$emit('closePopup')
    }
  }
  // mounted () {
  //   const vm = this
  //   document.addEventListener('click', function (event) {
  //     if (event.target === vm.$refs.popup_wrapper) {
  //       vm.closePopup()
  //     }
  //   })
  // }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: "montserrat";
  box-sizing: border-box;
}

.card {
  width: 400px;
  height: 550px;
  background: #f1f1f1;
  border: 1px solid #333 ;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.top-section{
  height: 310px;
  overflow: hidden;
  position: relative;
}

.image-container{
  width: 100%;
  height: 100%;
}

.nav {
  display: flex;
  justify-content: center;
}

 .nav img {
  width: 80px;
  height: 50px;
  border: 1px solid #ddd;
  margin: 8px 2px;
  cursor: pointer;
  transition: 0.3s;
}

.nav img:hover {
  border-color: #0da3dc;
}

/* .price {
  position: absolute;
  top: 20px;
  left: 20px;
  color: #4169E1 ;
  font-size: 24px;
} */

.product-info {
  padding: 20px;
}

.name {
  text-transform: uppercase;
  font-size: 24px;
  color: #333;
}

.dis {
  font-size: 16px;
  opacity: 0.7;
}

.add-btn {
  display: block;
  width: 100%;
  background: #f6c007;
  text-align: center;
  color: #333;
  padding: 10px;
  margin-top: 10px;
  transition: 0.3s;
}

button:hover{
  background: #DEB887;
}

.cl-btn {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    position: relative;
    z-index: 1;
    margin: 5px auto;
    cursor: pointer;
}
.cl-btn:before {
    content: '+';
    color: #337AB7;
    position: absolute;
    z-index: 2;
    transform: rotate(45deg);
    font-size: 50px;
    line-height: 1;
    top: -5px;
    left: 6px;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
}
.cl-btn:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background: #17A2B8;
    z-index: 1;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
    transform: scale(0.01);
}
.cl-btn:hover:after {
    transform: scale(1);
}
.cl-btn:hover:before {
    transform: scale(0.8) rotate(45deg);
    color: #fff;
}
</style>
