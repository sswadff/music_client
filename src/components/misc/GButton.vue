<template>
  <div class="g_input_row" @click="_click"><input class="g_button" type="button" :value="value"/></div>
</template>

<script>
export default {
  name: 'GButton',
  props: {
    value: String
  },
  methods: {
    _click: function () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.g_input_row {
  display: inline-block;
}

.g_button {
  font-size: medium;
  margin: 0 1em;
  width: 100%;
  height: 2.5em;
  background: transparent;
  border: solid 1px grey;
  outline: none;
  color: white;
}

.g_button:hover {
  box-shadow: 1px 1px 5px black;
  cursor: pointer;
  color: wheat;
}

.g_button:active {
  box-shadow: none;
  background: grey;
}
</style>
