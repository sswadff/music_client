const user = {
  state: {
    isLogin: false,
    info: {
      avatarURL: 'http://192.168.200.1:8888/public/user.png'
    }
  },
  mutations: {
    isLogin: function (state, isLogin) {
      state.isLogin = isLogin
    },
    info: function (state, info) {
      state.info = info
    }
  }
}

export default user
