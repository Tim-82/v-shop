<template>
  <div id="app">
    <Navbar/>
    <!-- <keep-alive> -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition >
    <!-- </keep-alive> -->
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
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>
