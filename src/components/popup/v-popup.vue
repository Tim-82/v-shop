<template>
  <div
    class="card"
  >
    <div class="top-section">
      <img :src=" require(`@/assets/images/shoes/${mainImage}`) "
        alt="img"
        class="image-container"
      >
      <i class="fas fa-times" @click="closePopup"></i>
      <!-- <i class="material-icons" @click="closePopup">cancel</i> -->
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
      <div class="dis">Sneakers</div>
      <div >
        <button class="add-btn"  @click="addBtn">Add to Cart</button>
      </div>
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
  },
  mounted () {
    const vm = this
    document.addEventListener('click', function (event) {
      if (event.target === vm.$refs.popup_wrapper) {
        vm.closePopup()
      }
    })
  }
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
/*
.btn {
  display: flex;
  justify-content: center;
} */

.closebtn {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
  /* color: white; */
}
.closebtn:hover {
  color: #ccc;
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
</style>
