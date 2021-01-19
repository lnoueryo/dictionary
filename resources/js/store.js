import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  logged_in: false,
  me: {}
}

const mutations = {
  setUser(state, payload) {
    state.me = payload.me
    state.logged_in = payload.logged_in
  },
}

const actions = {
  getUser ({commit}) {
    axios.get('/api/user')
    .then(response => {
      commit('setUser', {
        logged_in: true,
        me: response.data,
      })
    })
    .catch(_ => {
      commit('setUser', {
        logged_in: false,
        me: {},
      })
    })
  },

  logout ({commit}) {
    axios.get("/sanctum/csrf-cookie").then(response => {
      axios.post("/api/logout")
      commit('setUser', {
        logged_in: false,
        me: {},
      })
    })
  },
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
})