<template>
  <div class="g_dialog" :title="title" :visible="visible" v-show="visible">
    <div class="g_dialog_content">
      <div class="g_dialog_controls">
        <i class="el-icon-close" @click="switchDialog(false)"></i>
      </div>
      <div class="g_dialog_title"><h2>{{ title }}</h2></div>
      <div class="g_dialog_main">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GDialog',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    visible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    switchDialog (val) {
      this.$emit('update:visible', val)
    }
  }
}
</script>

<style scoped>

.g_dialog {
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  transition: 500ms;
}

.g_dialog_content {
  position: relative;
  bottom: 15%;
  top: 15%;
  left: 25%;
  right: 25%;
  width: 50%;
  max-height: 65%;
  padding-bottom: 5%;
  backdrop-filter: blur(15px);
  box-shadow: 1px 1px 5px black;
}

.g_dialog_controls {
  display: flex;
  flex-direction: row-reverse;
  border-bottom: #2c3e50 1px solid;
  background: black;
  opacity: 40%;
  height: 3%;
}

.g_dialog_controls i {
  font-size: larger;
  opacity: 100%;
  color: white;
}

.g_dialog_controls i:hover {
  cursor: pointer;
}

.g_dialog_controls i:active {
  color: mediumslateblue;
}

.g_dialog_title {
  height: 6%;
  box-shadow: 0px 1px 5px black;
}

.g_dialog_main {
  max-height: 91%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 0;
}

</style>
