<template>
  <div class="filters">
      <select v-model="filter.selectCategory" class="title">
          <!-- <option value="0">All categories</option> -->
          <option  v-for="category in categories" :key="category.id" :value="category.id">{{ category.section }}</option>
      </select>

    <div>
      <input v-model.number="filter.minPrice" type="number" />
      <input v-model.number="filter.maxPrice" type="number" />
    </div>

      <select v-model="filter.selectSort">
        <option v-for="rule in sortRules" :key="rule.key" :value="rule.key">{{ rule.title }}</option>
      </select>

    <div class="slider">
      <VueSlider
        v-model="filter.value"
      />
    </div>

    <button @click="clear" class="btn">Clear</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
  name: 'filters',
  components: {
    VueSlider
  },
  data () {
    return {
      categories: [
        { id: 0, section: 'All categories' },
        { id: 1, section: 'Man' },
        { id: 2, section: 'Woman' },
        { id: 3, section: 'Kids' }
      ],
      sortRules: [
        { key: 'id:asc', title: 'By order' },
        { key: 'rating:desc', title: 'By rating' },
        { key: 'price:asc', title: 'By price, cheap' },
        { key: 'price:desc', title: 'By price, expensive' }
      ],
      filter: {
        inputSearch: '',
        selectCategory: 0,
        minPrice: 0,
        maxPrice: 0,
        selectSort: 'id:asc',
        value: []
      }
    }
  },

  computed: {
    ...mapGetters(['MIN_PRODUCT', 'MAX_PRODUCT', 'GET_SEARCH_VALUE']),

    products () {
      return this.$store.state.products
    }
  },
  mounted () {
    this.clear()
  },
  watch: {
    filter: {
      handler (newFilter) {
        this.$emit('filter', newFilter)
      },
      deep: true

    },
    products () {
      this.filter.minPrice = this.MIN_PRODUCT
      this.filter.maxPrice = this.MAX_PRODUCT
    },
    GET_SEARCH_VALUE () {
      this.filter.inputSearch = this.GET_SEARCH_VALUE
    }
  },
  methods: {
    clear () {
      this.filter = {
        inputSearch: '',
        selectCategory: 0,
        minPrice: this.MIN_PRODUCT,
        maxPrice: this.MAX_PRODUCT,
        selectSort: 'id:asc',
        value: [0, 100]
      }
      this.$store.commit('CLEAR_INPUT_SEARCH')
    }
  }

}
</script>

<style scoped>
.filters {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  select {
    margin-bottom: 5px;
    width: 150px;
    background-color: #ddd;
  }

  input {
    width: 200 px;
    text-align: center;
  }

  .slider {
    padding:40px 15px;
    width: 300px;
  }
  .btn {
  background-color: #ddd;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  transition: 0.3s;
  }

  .btn:hover {
    background-color: #1596AA;
    color: white;
  }

</style>
