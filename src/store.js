import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logined: false,
    host: {
      root: 'http://192.168.1.119:5000',
      testRoot: 'http://192.168.1.131:8088'
    },
    user: {
      token: '',
      identity: 'visitor',
      userName: '',
      userHeader: '',
      email: '',
      wechat: '',
      phone: '',
      profile: '',
      organization: '',
      position: '',
      city: '',
      birthdate: '',
    },
    scheme: {
      type: '0',
      expireDate: ''
    },
    usecase: {
      wordSplit: { type: 1, times: 3 },
      wordFreqStat: { type: 2, times: 3 },
      keyWordExtract: { type: 3, times: 3 },
      emotionAnalysis: { type: 4, times: 3 },
      scorce: { type: 5, times: 3 },
    }
  },
  mutations: {
    login(state, user) {
      state.logined = true;
      state.user.token = user.token
      state.user.userName = user.userName;
      state.user.userHeader = user.userHeader;
      state.user.identity = user.identity;
      state.user.email = user.email;
    },
    logout(state) {
      state.logined = false;
      state.user.identity = 'visitor';
    },
    cacheToken(state, token) {
      state.user.token = token;
    }
  },
  actions: {

  },
  getters: {
    logined(state) {
      return state.logined;
    },
    host(state) {
      return state.host;
    },
    user(state) {
      return state.user;
    },
    scheme(state) {
      return state.scheme;
    }
  }
})
