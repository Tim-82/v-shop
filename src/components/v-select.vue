<template>
  <div class="select">
    <p
      class="title"
      @click="areOptionsVisible = !areOptionsVisible"
    >
      {{ selected }}
    </p>
    <div
      class="options"
      v-if="areOptionsVisible"
    >
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    options: {
      type: Array,
      default () {
        return []
      }
    },
    selected: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      areOptionsVisible: false
    }
  },
  methods: {
    selectOption (option) {
      this.$emit('select', option)
      this.areOptionsVisible = false
    }
  }
}
</script>

<style>
  .select {
    position: relative;
    width: 200px;
    cursor: pointer;
    /* text-align:center ; */
    margin-bottom: 5px;
    z-index: 1;
  }
  .title {
    border: solid 1px #aeaeae;
    padding: 8px;
  }
  .select p {
    margin: 0;
  }
  .options {
    border: solid 1px #aeaeae;
    background: #ffffff;
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    padding: 8px;
  }
  .options p:hover {
    background: #e7e7e7;
  }
</style>
