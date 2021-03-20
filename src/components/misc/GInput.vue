<template>
  <div class="g_input_row">
    <span>{{ label }}</span>
    <input class="g_input" :type="type" @input="$emit('change',$event.target.value)" :placeholder="placeholder"
           :disabled="disabled"/>
  </div>
</template>

<script>
export default {
  name: 'GInput',
  // props: ['type', 'label', 'value', 'placeholder'],
  props: {
    type: String, label: String, value: String, placeholder: String, disabled: Boolean
  },
  model: {
    prop: 'value',
    event: 'change'
  }
}
</script>

<style scoped>
.g_input_row {
  display: flex;
  margin: 1% auto;
}

.g_input {
  background-color: transparent;
  border: solid white 1px;
  height: 2em;
  text-indent: 2px;
  font-size: medium;
  width: 70%;
  outline: none;
  color: white;
}

.g_input:focus {
  background-color: transparent;
  width: 70%;
}

.g_input:hover {
  background-color: transparent;
  border: solid snow 1px;
  box-shadow: 1px 1px 10px black;
  width: 70%;
}

.g_input_row span {
  width: 5em;
  height: 100%;
  margin: auto 0.5em auto 0;
  text-shadow: 3px 3px 5px black;
  color: snow;
  font-size: large;
}
</style>
