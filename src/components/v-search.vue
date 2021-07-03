<template>
  <div v-if="this.$route.path !== '/'">
      <!-- Search input -->
    <input type="text" :placeholder="placeholder" v-model.trim ="search"/>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Search'
    }
  },
  data () {
    return { search: this.value }
  },
  watch: {
    search (val) {
      // console.log(val)
      this.$emit('search', val)
    }
  }
}
</script>

<style scoped>
input {
  padding: 2px 10px !important;
  margin-bottom: 0px;
  border-radius: 30px;
  color: #909399;
  font-size: 16px;
  height: auto;
}

</style>
