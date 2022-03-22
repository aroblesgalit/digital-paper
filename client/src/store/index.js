import { createStore } from 'vuex'
import createdPersistedState from 'vuex-persistedstate'
import axios from 'axios'

export default createStore({
  plugins: [createdPersistedState()],
  state: {
    registration: ''
  },
  mutations: {
    SET_REGS: (state, payload) => (state.registration = payload)
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
    }
  },
  modules: {}
})
