<template>
  <div id="app">
    <keep-alive>
      <Home />
    </keep-alive>
  </div>
</template>

<script>
import Home from './views/Home'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    Home
  },
  computed: {
    ...mapGetters([
      'MOBILE',
      'DESKTOP'
    ])
  },
  methods: {
    ...mapActions([
      'SET_MOBILE',
      'SET_DESKTOP'
    ])
  },
  mounted () {
    const context = this
    window.addEventListener('load', function () {
      if (window.innerWidth > 767) {
        context.SET_DESKTOP()
        // console.log(context.DESKTOP)
      } else {
        context.SET_MOBILE()
        // console.log(context.MOBILE)
      }
    })
  }
}
</script>

<style>
</style>
