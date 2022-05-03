import { createStore } from 'vuex'
import createdPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import router from '../router'

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
    async demoLogin () {
      try {
        await axios.post('api/user/login', {
          username: 'demo',
          password: 'pass123'
        })
      } catch (err) {
        console.error(err.message)
      }
    },
    async registerUser ({ commit }, data) {
      try {
        await axios.post('api/user/register', data)
        commit('SET_REGS', 'Congratulations! You have successfully registered.')
        setTimeout(() => {
          commit('SET_REGS', null)
          router.push({ name: 'Login' })
        }, 3000)
      } catch (err) {
        console.error(err.message)
        commit(
          'SET_REGS',
          'Oh no, something went wrong! Please try again later.'
        )
        setTimeout(() => {
          commit('SET_REGS', null)
        }, 3000)
      }
    },
    async loginUser (context, data) {
      try {
        await axios.post('api/user/login', data)
        router.push({ name: 'Home' })
      } catch (err) {
        console.error(err.message)
      }
    },
    async logoutUser ({ commit }) {
      try {
        await axios.get('api/user/logout')
        commit('SET_USER', {})
        commit('SET_REGS', null)
        router.push({ name: 'Login' })
      } catch (err) {
        console.error(err.message)
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
        console.error(err.message)
      }
    },
    async checkLoginStatus ({ commit }) {
      try {
        const response = await axios.get('/api/user/authenticated')
        commit('SET_USER', response.data)
        router.push({ name: 'Home' })
      } catch (err) {
        console.error(err.message)
        commit('SET_USER', {})
        router.push({ name: 'Login' })
      }
    },
    async deleteAccount ({ commit, state }) {
      try {
        await axios.delete(`api/user/${state.user._id}`)
        commit('SET_USER', {})
        router.push({ name: 'Login' })
      } catch (err) {
        console.error(err.message)
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
        console.log(err.message)
      }
    },
    async getUserPosts ({ commit }, payload) {
      try {
        const userPosts = await axios.get(`api/posts/user/${payload._id}`)
        commit('SET_USER_POSTS', userPosts.data)
      } catch (err) {
        console.log(err.message)
      }
    },
    async createPost ({ commit, state }, payload) {
      try {
        const newPost = await axios.post('api/posts', payload)
        commit('SET_USER_POSTS', [newPost.data, ...state.userPosts])
      } catch (err) {
        console.log(err.message)
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
        console.error(err.message)
      }
    },
    async setPostToEdit ({ commit }, payload) {
      try {
        const result = await axios.get(`api/posts/${payload}`)
        commit('SET_POST_TO_EDIT', result.data)
      } catch (err) {
        console.error(err.message)
      }
    },
    async updatePost ({ commit, state }, payload) {
      try {
        const updatedPost = await axios.put(`/api/posts/${payload.id}`, payload)
        let userPosts = [...state.userPosts]
        let index = userPosts.findIndex(post => post._id === payload.id)
        userPosts.splice(index, 1, updatedPost.data)
        commit('SET_USER_POSTS', userPosts)
        commit('SET_UPDATE_STAT', true)
        setTimeout(() => {
          commit('SET_UPDATE_STAT', null)
        }, 3000)
      } catch (err) {
        console.error(err.message)
        commit('SET_UPDATE_STAT', false)
        setTimeout(() => {
          commit('SET_UPDATE_STAT', null)
        }, 3000)
      }
    },
    async likePost ({ commit, state }, payload) {
      try {
        let currentPosts = [...state.publicPosts]
        const indexOfPost = currentPosts.findIndex(
          post => post._id === payload.postId
        )
        if (currentPosts[indexOfPost].likes.includes(payload.userId)) return
        currentPosts[indexOfPost].likes.push(payload.userId)
        commit('SET_PUBLIC_POSTS', currentPosts)
        await axios.patch(`/api/posts/like/${payload.postId}`, payload)
      } catch (err) {
        console.error(err.message)
      }
    },
    async unlikePost ({ commit, state }, payload) {
      try {
        let currentPosts = [...state.publicPosts]
        const indexOfPost = currentPosts.findIndex(
          post => post._id === payload.postId
        )
        if (!currentPosts[indexOfPost].likes.includes(payload.userId)) return
        const indexOfLike = currentPosts[indexOfPost].likes.findIndex(
          user => user === payload.userId
        )
        currentPosts[indexOfPost].likes.splice(indexOfLike, 1)
        commit('SET_PUBLIC_POSTS', currentPosts)
        await axios.patch(`/api/posts/unlike/${payload.postId}`, payload)
      } catch (err) {
        console.error(err.message)
      }
    }
  },
  getters: {}
}

const commentModule = {
  namespaced: true,
  state: {
    commentToEdit: {},
    updateSuccessful: null
  },
  mutations: {
    SET_COMMENT_TO_EDIT: (state, payload) => (state.commentToEdit = payload),
    SET_UPDATE_STAT: (state, payload) => (state.updateSuccessful = payload)
  },
  actions: {
    async createComment ({ commit, rootState }, payload) {
      try {
        const newComment = await axios.post('api/comments', {
          body: payload.body,
          commenter: payload.commenter
        })
        // Update post by adding comment id
        const updatedPost = await axios.patch(
          `/api/posts/${payload.postId}`,
          newComment.data
        )
        const currentPublicPosts = [...rootState.post.publicPosts]
        let indexOfPostToUpdate = currentPublicPosts.findIndex(
          post => post._id === payload.postId
        )
        currentPublicPosts.splice(indexOfPostToUpdate, 1, updatedPost.data)
        commit('post/SET_PUBLIC_POSTS', currentPublicPosts, { root: true })
      } catch (err) {
        console.error(err.message)
      }
    },
    async setCommentToEdit ({ commit }, payload) {
      try {
        const result = await axios.get(`api/comments/${payload}`)
        commit('SET_COMMENT_TO_EDIT', result.data)
      } catch (err) {
        console.error(err.message)
      }
    },
    unsetCommentToEdit ({ commit, state }) {
      if (Object.keys(state.commentToEdit).length === 0) return
      commit('SET_COMMENT_TO_EDIT', {})
    },
    async updateComment ({ commit, rootState }, payload) {
      try {
        const updatedComment = await axios.put(
          `/api/comments/${payload._id}`,
          payload
        )
        const commenterPopulated = rootState.user.user
        updatedComment.data.commenter = commenterPopulated
        // Update comment in post comments array
        const currentPublicPosts = [...rootState.post.publicPosts]
        let indexOfPostToUpdate = currentPublicPosts.findIndex(
          post =>
            post.comments.filter(comment => comment._id === payload._id)[0]
        )
        let indexOfCommentToUpdate = currentPublicPosts[
          indexOfPostToUpdate
        ].comments.findIndex(comment => comment._id === payload._id)
        currentPublicPosts[indexOfPostToUpdate].comments.splice(
          indexOfCommentToUpdate,
          1,
          updatedComment.data
        )
        commit('post/SET_PUBLIC_POSTS', currentPublicPosts, { root: true })
        commit('SET_UPDATE_STAT', true)
        setTimeout(() => {
          commit('SET_UPDATE_STAT', null)
        }, 3000)
      } catch (err) {
        console.error(err.message)
      }
    },
    async deleteComment ({ commit, rootState }, payload) {
      try {
        await axios.delete(`api/comments/${payload}`)
        // Delete comment from Post comments array in frontend
        const currentPublicPosts = [...rootState.post.publicPosts]
        let indexOfPostToUpdate = currentPublicPosts.findIndex(
          post => post.comments.filter(comment => comment._id === payload)[0]
        )
        const indexOfCommentToDelete = currentPublicPosts[
          indexOfPostToUpdate
        ].comments.findIndex(comment => comment._id === payload)
        currentPublicPosts[indexOfPostToUpdate].comments.splice(
          indexOfCommentToDelete,
          1
        )
        commit('post/SET_PUBLIC_POSTS', currentPublicPosts, { root: true })
      } catch (err) {
        console.error(err.message)
      }
    }
  },
  getters: {}
}

export default createStore({
  plugins: [createdPersistedState()],
  modules: {
    user: userModule,
    post: postModule,
    comment: commentModule
  }
})
