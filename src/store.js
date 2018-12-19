import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      token: '',
      identitiy: 'visitor',
      userName: 'USER',
      userHeader: '',
      email: 'example@email/com',
      wechat: '',
      phone: '',
      profile: '',
      organization: '',
      position: '',
      city: '',
      birthdate: '',
    },
    scheme: {
      type: 'free',
      expireDate: ''
    }
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    user(state) {
      return state.user;
    },
    scheme(state) {
      return state.scheme;
    }
  }
})
