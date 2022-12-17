import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './models/auth'
import User from './models/user'
import Takeover from './models/takeover'
import Board from './models/board'
import Edukit from './models/edukit'

Vue.use(Vuex)

export default new Vuex.Store({
  // strict 배포시 성능이슈 발생할 가능성있어 고정값 대신 환경변수 사용
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    Auth,
    User,
    Takeover,
    Board,
    Edukit
  }
})
