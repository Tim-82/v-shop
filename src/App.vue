<template>
  <div id="app">
    <Navbar/>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Navbar from './views/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  },
  computed: {},
  methods: {}
}
</script>

<style>
</style>
