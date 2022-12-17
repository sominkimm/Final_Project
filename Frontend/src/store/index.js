import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './models/auth'
import User from './models/user'
<<<<<<< Updated upstream
import Board from './models/board'

=======
import createPersistedState from 'vuex-persistedstate'
>>>>>>> Stashed changes
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
<<<<<<< Updated upstream
    User,
    Board
  }
=======
    User
  },
  plugins: [createPersistedState()]
>>>>>>> Stashed changes
})
