<template>
  <div id="app">
    <MainWrapper/>
  </div>
</template>

<script>
import MainWrapper from './components/v-main-wrapper'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    MainWrapper
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
