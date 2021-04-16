<template>
  <div class='range-slider'>
    <input type="range" min="0" max="100" step="1" v-model="sliderMin">
    <input type="range" min="0" max="100" step="1" v-model="sliderMax">
  </div>
</template>

<script>
export default {
  name: 'RangeSlider',
  props: {
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      minAngle: this.min,
      maxAngle: this.max
    }
  },
  computed: {
    sliderMin: {
      get: function () {
        var val = parseInt(this.minAngle)
        return val
      },
      set: function (val) {
        val = parseInt(val)
        if (val > this.maxAngle) {
          this.maxAngle = val
        }
        this.minAngle = val
      }
    },
    sliderMax: {
      get: function () {
        var val = parseInt(this.maxAngle)
        return val
      },
      set: function (val) {
        val = parseInt(val)
        if (val < this.minAngle) {
          this.minAngle = val
        }
        this.maxAngle = val
        this.$emit('sort')
      }
    }
  },
  watch: {
    minAngle (val) {
      this.$emit('search', val)
      this.$emit('sort')
    },
    maxAngle (val) {
      this.$emit('search', val)
      this.$emit('sort')
    }
  }
}
</script>

<style scoped>
</style>
