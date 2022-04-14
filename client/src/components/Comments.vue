<template>
  <div class="d-flex align-items-center">
    <div class="me-2">
      <img v-if="user.image" :src="user.image" alt="User avatar" />
      <div v-else class="avatar">
        {{
          user.firstName
            ? user.firstName.split('')[0]
            : user.username.split('')[0]
        }}
      </div>
    </div>
    <form @submit.prevent="formSubmit">
      <label class="visually-hidden" for="comment-body">Comment</label>
      <div class="input-group">
        <input
          v-model="body"
          type="text"
          class="form-control"
          id="comment-body"
          placeholder="Write a comment..."
          required
        />
        <span @click="formSubmit" class="input-group-text"
          ><i class="bi bi-send"></i
        ></span>
      </div>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const userModule = createNamespacedHelpers('user')
const commentModule = createNamespacedHelpers('comment')

export default {
  name: 'Comments',
  props: {
    postId: String
  },
  data () {
    return {
      body: ''
    }
  },
  methods: {
    ...commentModule.mapActions(['createComment']),
    async formSubmit () {
      try {
        if (!this.body) return
        const payload = {
          postId: this.postId,
          body: this.body,
          commenter: this.user._id
          // Also pass down post id to add this comment to the post
        }
        await this.createComment(payload)
        this.body = ''
      } catch (err) {
        console.error(err)
      }
    }
  },
  computed: {
    ...userModule.mapState(['user'])
  }
}
</script>

<style scoped>
form {
  width: 100%;
}
input {
  border-right: none;
}
.input-group-text {
  cursor: pointer;
  background-color: transparent;
  border-left: none;
}
img {
  height: 42px;
  width: 42px;
  border-radius: 50%;
}
.avatar {
  height: 42px;
  width: 42px;
  border-radius: 50%;
  background-color: #4a94eb;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 100px;
  overflow: hidden;
}
</style>
