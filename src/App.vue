<template>
  <div id="app">
    <keep-alive>
      <Home />
    </keep-alive>
  </div>
</template>

<script>
import Home from './views/Home'
export default {
  name: 'app',
  components: {
    Home
  },
  computed: {},
  methods: {}
}
</script>

<style>
</style>
