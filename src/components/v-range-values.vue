<template>
  <div class="range-values">
    <input type="number" min="0" max="100" step="1" :value="min" disabled>
    <input type="number" min="0" max="100" step="1" :value="max" disabled>
  </div>
</template>

<script>
export default {
  name: 'RangeValues',
  props: {
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>

</style>
