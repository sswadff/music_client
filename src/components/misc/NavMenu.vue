<template>
  <div class="nav_menu">
    <table class="nav_table">
      <tr>
        <td>
          <img src="static/logo.png" style="object-fit: scale-down;">
        </td>
        <td>
          <a @click="routeChange(1)" href="#">首页</a>
        </td>
        <td>
          <a @click="routeChange(2)" href="#">个人信息</a>
        </td>
        <td>
          <a @click="routeChange(3)" href="#">我的歌单</a>
        </td>
        <td>
          <a @click="routeChange(4)" href="#">我的好友</a>
        </td>
        <td>
          <a @click="routeChange(5)" href="#">查找</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  methods: {
    routeChange (idx) {
      switch (idx) {
        case 1:
          this.$router.push({ name: 'HomeContent' })
          break
        case 2:
          this.$router.push({ name: 'PersonalInfo' })
          break
      }
    }
  }
}
</script>

<style scoped>
.nav_menu {
  width: 100%;
  backdrop-filter: blur(15px);
  box-shadow: 1px 1px 5px black;
}

.nav_table {
  width: 100%;
  height: 100%;
}

.nav_table tr {
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  height: 100%;
}

.nav_table td {
  margin: 0;
  height: 100%;
  width: 100%;
  text-align: center;
}

.nav_table td a {
  height: 100%;
  width: 100%;
  color: black;
  /*font-size: 1.5em;*/
  font-size: larger;
  text-decoration: none;
  text-shadow: 3px 3px 1px gray;
  line-height: 3.4em;
}

.nav_table td a:active {
  color: mediumslateblue;
  text-shadow: 3px 3px 1px hotpink;
}

</style>
