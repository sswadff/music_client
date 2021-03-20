<template>
  <div class="login_page_back">
    <LoginCard class="login_card"/>
  </div>
</template>

<script>

import LoginCard from '../components/LoginPage/LoginCard'

export default {
  name: 'LoginPage',
  components: { LoginCard }
}
</script>

<style scoped>
.login_page_back {
  background-image: url("/static/login_back.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.login_card {
}
</style>
