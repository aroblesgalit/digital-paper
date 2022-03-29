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

const postModule = {
  namespaced: true,
  state: {
    publicPosts: [],
    userPosts: []
  },
  mutations: {
    SET_PUBLIC_POSTS: (state, payload) => (state.publicPosts = payload),
    SET_USER_POSTS: (state, payload) => (state.userPosts = payload)
  },
  actions: {
    async getPublicPosts ({ commit }) {
      try {
        const publicPosts = await axios.get('http://localhost:5000/api/posts')
        commit('SET_PUBLIC_POSTS', publicPosts.data)
      } catch (err) {
        console.log(err)
      }
    },
    async getUserPosts ({ commit }, data) {
      try {
        const userPosts = await axios.get(
          'http://localhost:5000/api/posts/user/' + data.id
        )
        commit('SET_USER_POSTS', userPosts.data)
      } catch (err) {
        console.log(err)
      }
    },
    async createPost ({ commit }, data) {
      try {
        const newPost = await axios.post(
          'http://localhost:5000/api/posts',
          data
        )
        let userPosts = [newPost, ...this.userPosts]
        let publicPosts = [newPost, ...this.publicPosts]
        commit('SET_USER_POSTS', userPosts)
        commit('SET_PUBLIC_POSTS', publicPosts)
      } catch (err) {
        console.log(err)
      }
    }
  },
  getters: {}
}

export default createStore({
  plugins: [createdPersistedState()],
  modules: {
    user: userModule,
    post: postModule
  }
})
