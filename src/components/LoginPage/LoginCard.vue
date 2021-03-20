<template>
  <div class="login_card">
    <div class="left_card">
      <div class="title">
        <div>
          <h1 class="title_text">Chenkr在线音乐网站</h1>
          <h3 class="title_text">你能找到登陆框吗？</h3>
          <h3 class="title_text">她就在右边哦!!!</h3>
        </div>
      </div>
    </div>
    <div class="right_card">
      <div class="login_card_back">
        <div class="login_form">
          <div class="login_title"><h2>欢迎光临</h2></div>
          <GInput class="input" label="用户名:" v-model="loginForm.userName" placeholder="用户名"/>
          <GInput class="input" type="password" label="密码:" v-model="loginForm.userPass" placeholder="密码"/>
          <div class="button_group">
            <GButton class="button" @click="login" value="登录"/>
            <GButton class="button" @click="registerDialog" value="注册"/>
          </div>
        </div>
      </div>
    </div>
    <RegisterDialog ref="reg_dialog"/>
  </div>
</template>

<script>
import GInput from '../misc/GInput'
import GButton from '../misc/GButton'
import RegisterDialog from './RegisterDialog'
import { login } from '../../api'

export default {
  name: 'LoginCard',
  components: { RegisterDialog, GButton, GInput },
  data () {
    return {
      loginForm: {
        userName: null,
        userPass: null
      },
      isShowDialog: true
    }
  },
  methods: {
    registerDialog () {
      this.$refs.reg_dialog.switchDialog()
    },
    login () {
      let params = {
        userName: this.loginForm.userName,
        userPass: this.loginForm.userPass
      }
      login(params).then(resp => {
        this.$store.state.user.info = resp.data.info
        this.$store.state.user.isLogin = true
        this.$message.success(resp.data.msg)
        this.$router.push({ name: 'HomePage' })
      }, error => {
        this.$message.error(error.data.msg)
      })
    }
  }
}
</script>

<style scoped>
.login_title {
  width: 100%;
  margin-left: 8%;
  margin-bottom: 2%;
}

.login_card {
  height: 100%;
  width: 100%;
  display: flex;
}

.left_card {
  width: 70%;
}

.login_card_back {
  position: absolute;
  right: 2.5em;
  top: 1.5em;
  bottom: 0;
  height: 95%;
  width: 30%;
  transition: 1s;
  border-radius: 1em;
}

.login_card_back:hover {
  position: absolute;
  right: 2em;
  top: 1em;
  bottom: 0;
  backdrop-filter: blur(10px);
  box-shadow: 1px 0 15px black;
  height: 95%;
  width: 30%;
  transition: 500ms;
}

.login_card_back * {
  filter: opacity(0%);
  transition: 1s;
}

.login_card_back:hover * {
  filter: opacity(100%);
  transition: 500ms;
}

.title {
  position: relative;
  top: 20%;
}

.title_text {
  margin: 0.5em auto;
}

.login_form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 35% auto;
}

.input_row span {
  width: 5em;
  height: 100%;
  margin: auto 0.5em auto 0;
  text-shadow: 1px 1px 10px grey;
}

.button_group {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  margin-top: 0.5em;
  justify-content: center;
}

.button {
  margin: 0 1em;
  width: 20%;
  height: 2.5em;
}

.input {
  width: 70%;
}

</style>
