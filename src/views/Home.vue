<template>
  <div>
    <Header/>
    <keep-alive>
      <router-view />
      <!-- <NotificationList/> -->
    </keep-alive>
  </div>
</template>

<script>
// import Catalog from './Catalog'
import Header from '../components/v-header'
// import NotificationList from '../components/notifications/v-notification-list.vue'

export default {
  name: 'home',
  components: { Header },
  // props: {},
  data () {
    return {
    }
  },
  computed: {}
}
</script>

<style scoped>
  /* .main-wpapper {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
  } */
</style>
