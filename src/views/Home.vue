<template>
  <div>
    <Header/>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Header from '../components/v-header'

export default {
  name: 'home',
  components: { Header },
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
