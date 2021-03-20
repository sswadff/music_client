<template>
  <div class="home_page">
    <NavMenu class="nav_menu"/>
    <router-view class="router_view"/>
  </div>
</template>

<script>
import NavMenu from '../components/misc/NavMenu'

export default {
  name: 'HomePage',
  components: { NavMenu },
  data () {
    return {}
  }
}
</script>
<style scoped>
.home_page {
  width: 100%;
  height: 100%;
  background-image: url("/static/login_back.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.nav_menu {
  height: 9%;
}

.router_view {
  height: 91%;
  overflow: auto;
  overflow-x: auto;
}
</style>
