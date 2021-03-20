<template>
  <GDialog class="registerDialog" title="注册页面" :visible.sync="showDialog">
    <div class="input_form">
      <GInput class="input" v-model="registerForm.userName" label="用户名:"/>
      <GInput class="input" v-model="registerForm.userPass" type="password" label="密码:"/>
      <GInput class="input" v-model="registerForm.userPass2" type="password" label="确认密码:"/>
      <GInput class="input" v-model="registerForm.email" label="邮箱:"/>
    </div>
    <div class="button_group">
      <GButton class="button" @click="showDialog=false" value="取消"/>
      <GButton class="button" @click="submit" value="注册"/>
    </div>
  </GDialog>
</template>

<script>
import { register } from '../../api'
import GDialog from '../misc/GDialog'
import GInput from '../misc/GInput'
import GButton from '../misc/GButton'

export default {
  components: { GButton, GInput, GDialog },
  name: 'RegisterDialog',
  data () {
    return {
      showDialog: false,
      registerForm: {
        userName: null,
        userPass: null,
        userPass2: null,
        email: null
      }
    }
  },
  methods: {
    submit () {
      if (this.registerForm.userPass !== this.registerForm.userPass2) {
        this.$message.error('两次密码不一致')
        return
      }
      let params = {
        userName: this.registerForm.userName,
        userPass: this.registerForm.userPass,
        email: this.registerForm.email,
        avatarURL: this.$store.state.user.info.avatarURL
      }
      register(params).then(resp => {
        this.$message.success(resp.data.msg)
        this.switchDialog()
      }, error => {
        this.$message.error(error.data.msg)
      })
    },
    switchDialog () {
      this.showDialog = !this.showDialog
    }
  }
}
</script>

<style scoped>
.input {
  width: 50%;
}

.input_form {
  margin-top: 5em;
}

.button_group {
  padding: 1em;
}

.button {
  width: 12%;
  margin: 0 1em;
}

</style>
