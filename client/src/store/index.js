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
    async demoLogin ({ commit }) {
      try {
        const response = await axios.post('api/user/login', {
          username: 'demo',
          password: 'pass123'
        })
        commit('SET_USER', response.data)
      } catch (err) {
        console.error(err)
        commit('SET_USER', {})
      }
    },
    async registerUser ({ commit }, data) {
      try {
        await axios.post('api/user/register', data)
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
        const response = await axios.post('api/user/login', data)
        commit('SET_USER', response.data)
      } catch (err) {
        console.error(err)
        commit('SET_USER', {})
      }
    },
    async logoutUser ({ commit }) {
      try {
        await axios.get('api/user/logout')
        commit('SET_USER', {})
        commit('SET_REGS', '')
      } catch (err) {
        console.error(err)
      }
    },
    async updateUser ({ commit, state }, payload) {
      try {
        const updatedUser = await axios.patch(
          'api/user/' + payload._id,
          payload
        )
        let currentUserState = { ...state.user, ...updatedUser.data }
        commit('SET_USER', currentUserState)
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
    userPosts: [],
    postToEdit: {},
    updateSuccessful: null
  },
  mutations: {
    SET_PUBLIC_POSTS: (state, payload) => (state.publicPosts = payload),
    SET_USER_POSTS: (state, payload) => (state.userPosts = payload),
    SET_POST_TO_EDIT: (state, payload) => (state.postToEdit = payload),
    SET_UPDATE_STAT: (state, payload) => (state.updateSuccessful = payload)
  },
  actions: {
    async getPublicPosts ({ commit }) {
      try {
        const publicPosts = await axios.get('api/posts')
        commit('SET_PUBLIC_POSTS', publicPosts.data)
      } catch (err) {
        console.log(err)
      }
    },
    async getUserPosts ({ commit }, payload) {
      try {
        const userPosts = await axios.get(`api/posts/user/${payload._id}`)
        commit('SET_USER_POSTS', userPosts.data)
      } catch (err) {
        console.log(err)
      }
    },
    async createPost ({ commit, state }, payload) {
      try {
        const newPost = await axios.post('api/posts', payload)
        commit('SET_USER_POSTS', [newPost.data, ...state.userPosts])
      } catch (err) {
        console.log(err)
      }
    },
    async deletePost ({ commit, state }, payload) {
      try {
        await axios.delete(`api/posts/${payload.id}`)
        let userPosts = [...state.userPosts]
        let index = userPosts.findIndex(post => post._id === payload.id)
        userPosts.splice(index, 1)
        commit('SET_USER_POSTS', userPosts)
      } catch (err) {
        console.error(err)
      }
    },
    async setPostToEdit ({ commit }, payload) {
      try {
        const result = await axios.get(`api/posts/${payload}`)
        commit('SET_POST_TO_EDIT', result.data)
      } catch (err) {
        console.error(err)
      }
    },
    async updatePost ({ commit, state }, payload) {
      try {
        const updatedPost = await axios.put(`api/posts/${payload.id}`, payload)
        let userPosts = [...state.userPosts]
        let index = userPosts.findIndex(post => post._id === payload.id)
        userPosts.splice(index, 1, updatedPost.data)
        commit('SET_USER_POSTS', userPosts)
        commit('SET_UPDATE_STAT', true)
        setTimeout(() => {
          commit('SET_UPDATE_STAT', null)
        }, 3000)
      } catch (err) {
        console.error(err)
        commit('SET_UPDATE_STAT', false)
        setTimeout(() => {
          commit('SET_UPDATE_STAT', null)
        }, 3000)
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
