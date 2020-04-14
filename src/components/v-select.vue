<template>
  <div class="select"  v-if="expanded">
    <p
      class="title"
      @click="OptionsVisible = !OptionsVisible"
    >
      {{ selected }}
    </p>
    <div
      class="options"
      v-if="OptionsVisible"
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
    },
    expanded: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      OptionsVisible: false
    }
  },
  methods: {
    selectOption (option) {
      this.$emit('select', option)
      this.OptionsVisible = false
    },
    hideSelect () {
      this.OptionsVisible = false
    }
  },
  mounted () {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.hideSelect)
  }
}
</script>

<style>
  .select {
    position: relative;
    width: 200px;
    cursor: pointer;
    text-align: ;
    margin-bottom: 5px;
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
