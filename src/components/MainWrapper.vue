<template>
  <div class="main-wpapper">
    <Catalog/>
  </div>
</template>

<script>
import Catalog from './Catalog'
// import Cart from './components/Cart'

export default {
  name: 'main-wpapper',
  components: { Catalog },
  props: {},
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .main-wpapper {
    max-width: 900px;
    margin: 0 auto;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto; */
  }
</style>
