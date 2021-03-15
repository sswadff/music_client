const user = {
  state: {
    isLogin: false,
    info: {}
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
