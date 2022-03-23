import { createStore } from 'vuex'
import createdPersistedState from 'vuex-persistedstate'
import axios from 'axios'

export default createStore({
  plugins: [createdPersistedState()],
  state: {
    registration: null,
    user: null
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
        console.log(response.data)
        commit('SET_USER', response.data)
      } catch (err) {
        console.error(err)
        commit('SET_USER', {})
      }
    }
  },
  modules: {}
})
