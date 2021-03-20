<template>
  <div class="home_content">
    <div class="top">
      <el-carousel :interval="4000" type="card" height="200px" arrow="never">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="list">
      <div class="list_row">
        <h3>每日推送</h3>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
      </div>
      <br/>
      <div class="list_row">
        <h3>爱情</h3>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
      </div>
      <div class="list_row">
        <h3>动漫</h3>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
      </div>
      <div class="list_row">
        <h3>游戏</h3>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
      </div>
      <div class="list_row">
        <h3>随机</h3>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
        <el-image class="c_image" src="#"/>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeContent'
}
</script>

<style scoped>
.top {
  position: relative;
  margin: auto;
  width: 99%;
  top: 1em;
}

.home_content {
  backdrop-filter: blur(150px) opacity(80%);
  box-shadow: 1px 1px 5px black;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.c_image {
  width: 10em;
  height: 10em;
}

.list {
}

.list_row {
  margin: 1em auto;
}

.list_row h3 {
  margin: 1em 0;
}
</style>
