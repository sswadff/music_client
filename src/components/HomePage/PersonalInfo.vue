<template>
  <div class="personal_info">
    <div class="g_form">
      <div class="input_div">
        <GInput class="input" label="姓名:"/>
      </div>
      <div class="input_div">
        <GInput class="input" label="邮箱:"/>
      </div>
      <div class="input_div">
        <GInput class="input" label="简介:"/>
      </div>
    </div>
  </div>
</template>

<script>
import GInput from '../misc/GInput'

export default {
  name: 'PersonalInfo',
  components: { GInput }
}
</script>

<style scoped>
.g_form {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  top: 5em;
}

.input_div {
  width: 100%;
}

.input {
  width: 25%;
  color: black;
  margin-top: 0;
}

.personal_info {
  backdrop-filter: blur(150px) opacity(80%);
  box-shadow: 1px 1px 5px black;
}
</style>
