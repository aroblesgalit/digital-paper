import { createStore } from 'vuex'
import createdPersistedState from 'vuex-persistedstate'
import axios from 'axios'

const userModule = {
  namespaced: true,
  state: {
    registration: null,
    user: {}
  },
  mutations: {
    SET_REGS: (state, payload) => (state.registration = payload),
    SET_USER: (state, payload) => (state.user = payload)
  },
  actions: {
    async registerUser ({ commit }, data) {
      try {
        await axios.post('http://localhost:5000/api/user/register', data)
        commit('SET_REGS', 'Congratulations! You have successfully registered.')
      } catch (err) {
        console.error(err)
        commit(
          'SET_REGS',
          'Oh no, something went wrong! Please try again later.'
        )
      }
    },
    async loginUser ({ commit }, data) {
      try {
        const response = await axios.post(
          'http://localhost:5000/api/user/login',
          data
        )
        commit('SET_USER', response.data)
      } catch (err) {
        console.error(err)
        commit('SET_USER', {})
      }
    },
    async logoutUser ({ commit }) {
      try {
        await axios.get('http://localhost:5000/api/user/logout')
        commit('SET_USER', {})
        commit('SET_REGS', '')
      } catch (err) {
        console.error(err)
      }
    }
  },
  getters: {
    isAuthenticated (state) {
      return Object.keys(state.user).length === 0 ? false : true
    }
  }
}

export default createStore({
  plugins: [createdPersistedState()],
  modules: {
    user: userModule
  }
})
