<template>
  <div id="app">
    <Header/>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Header from './views/v-header'
export default {
  name: 'app',
  components: {
    Header
  },
  computed: {},
  methods: {}
}
</script>

<style>
</style>
