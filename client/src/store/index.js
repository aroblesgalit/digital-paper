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
    postToEdit: {}
  },
  mutations: {
    SET_PUBLIC_POSTS: (state, payload) => (state.publicPosts = payload),
    SET_USER_POSTS: (state, payload) => (state.userPosts = payload),
    SET_POST_TO_EDIT: (state, payload) => (state.postToEdit = payload)
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
    async getUserPosts ({ commit }, data) {
      try {
        const userPosts = await axios.get('api/posts/user/' + data.id)
        commit('SET_USER_POSTS', userPosts.data)
      } catch (err) {
        console.log(err)
      }
    },
    async createPost ({ commit, state }, data) {
      try {
        const newPost = await axios.post('api/posts', data)
        commit('SET_USER_POSTS', [newPost.data, ...state.userPosts])
      } catch (err) {
        console.log(err)
      }
    },
    async deletePost ({ commit, state }, data) {
      try {
        await axios.delete('api/posts/' + data.id)
        let userPosts = [...state.userPosts]
        let index = userPosts.findIndex(post => post._id === data.id)
        userPosts.splice(index, 1)
        commit('SET_USER_POSTS', userPosts)
      } catch (err) {
        console.error(err)
      }
    },
    async setPostToEdit ({ commit }, payload) {
      try {
        const result = await axios.get('api/posts/' + payload)
        commit('SET_POST_TO_EDIT', result.data)
      } catch (err) {
        console.error(err)
      }
    },
    async updatePost ({ commit, state }, data) {
      try {
        const updatedPost = await axios.put('api/posts/' + data.id, data)
        let userPosts = [...state.userPosts]
        let index = userPosts.findIndex(post => post._id === data.id)
        userPosts.splice(index, 1, updatedPost.data)
        commit('SET_USER_POSTS', userPosts)
      } catch (err) {
        console.error(err)
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
