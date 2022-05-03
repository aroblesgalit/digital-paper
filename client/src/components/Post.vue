<template>
  <div class="card">
    <div class="header card-body d-flex">
      <div class="me-3">
        <img
          v-if="post.author.image"
          :src="post.author.image"
          alt="Author avatar"
        />
        <div v-else class="avatar">
          {{ post.author.username.split('')[0] }}
        </div>
      </div>
      <div class="d-flex flex-column justify-content-center">
        <p class="m-0">
          {{
            post.author.firstName && post.author.lastName
              ? post.author.firstName + ' ' + post.author.lastName
              : post.author.username
          }}
        </p>
        <span>{{ formattedTime }}</span>
      </div>
    </div>
    <div class="body card-body">
      <div class="post-image" v-if="post.image">
        <img :src="post.image" alt="" role="presentation" aria-hidden="true" />
      </div>
      <span class="fw-bold">{{ post.category }}</span>
      <h5 class="card-title">{{ post.title }}</h5>
      <p ref="postBody" class="card-text" :class="[!readMore && 'less']">
        {{ post.body }}
      </p>
    </div>
    <div
      :class="[
        'footer',
        'card-body',
        'd-flex',
        showLink ? 'justify-content-between' : 'justify-content-end'
      ]"
    >
      <p v-if="showLink" class="card-link" @click="readMore = !readMore">
        {{ readMore ? 'Show less' : 'Read more' }}
      </p>
      <div class="d-flex mb-3">
        <div class="me-4">
          <span
            :class="[
              'bi',
              post.likes.includes(user._id) ? 'bi-heart-fill' : 'bi-heart'
            ]"
            @click="toggleLike"
            >&nbsp;{{ post.likes.length }}</span
          >
        </div>
        <div>
          <span class="bi bi-chat" @click="toggleComments"
            >&nbsp;{{ post.comments.length }}</span
          >
        </div>
      </div>
    </div>
    <div
      class="card-body comment-input"
      v-show="isAuthenticated && showComments"
    >
      <CommentInput :post="post" />
    </div>
    <div
      class="card-body comments"
      v-show="showComments && post.comments.length > 0"
    >
      <Comment
        v-for="comment in post.comments"
        :key="comment._id"
        :comment="comment"
      />
    </div>
  </div>
</template>

<script>
import CommentInput from './CommentInput.vue'
import Comment from './Comment.vue'
import { createNamespacedHelpers } from 'vuex'
const userModule = createNamespacedHelpers('user')
const commentModule = createNamespacedHelpers('comment')
const postModule = createNamespacedHelpers('post')

export default {
  name: 'Post',
  props: {
    post: Object
  },
  components: {
    CommentInput,
    Comment
  },
  data () {
    return {
      readMore: false,
      showLink: false,
      showComments: false
    }
  },
  methods: {
    ...commentModule.mapActions(['unsetCommentToEdit']),
    ...postModule.mapActions(['likePost', 'unlikePost']),
    toggleComments () {
      this.showComments = !this.showComments
      this.unsetCommentToEdit()
    },
    async toggleLike () {
      try {
        if (!this.isAuthenticated) return
        if (this.post.likes.includes(this.user._id)) {
          await this.unlikePost({
            postId: this.post._id,
            userId: this.user._id
          })
        } else {
          await this.likePost({
            postId: this.post._id,
            userId: this.user._id
          })
        }
      } catch (err) {
        console.error(err.message)
      }
    }
  },
  mounted () {
    if (this.$refs.postBody.clientHeight >= 105) {
      this.showLink = true
    }
  },
  computed: {
    ...userModule.mapState(['user']),
    ...userModule.mapGetters(['isAuthenticated']),
    formattedTime () {
      let datePosted = new Date(this.post.createdAt)
      let dateNow = new Date()
      let difference = dateNow - datePosted
      if (
        datePosted.getMonth() === dateNow.getMonth() &&
        datePosted.getDate() === dateNow.getDate() &&
        datePosted.getFullYear() === dateNow.getFullYear()
      ) {
        let seconds = Math.floor((difference / 1000) % 60)
        let minutes = Math.floor((difference / (1000 * 60)) % 60)
        let hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        if (hours < 1 && minutes < 1) {
          return seconds + 's'
        } else if (hours < 1) {
          return minutes + 'm'
        } else {
          return hours + 'h'
        }
      } else if (Math.floor(difference / (1000 * 60 * 60 * 24)) < 1) {
        let hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        return hours + 'h'
      } else {
        return Math.floor(difference / (1000 * 60 * 60 * 24)) + 'd'
      }
    }
  }
}
</script>

<style scoped>
.card {
  width: 450px;
  max-width: 90vw;
  margin-bottom: 16px;
}
.card .header {
  padding-bottom: 0;
}
.card .header img {
  height: 42px;
  width: 42px;
  border-radius: 50%;
}
.card .header .avatar {
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
.card .header p {
  font-size: 18px;
  font-weight: 600;
}
.card .header span {
  font-size: 12px;
}
.post-image {
  width: 100%;
  height: 80px;
}
.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card .body h5 {
  font-weight: bold;
}
.card .body span {
  font-size: 14px;
  color: #939393;
}
.card .body p {
  font-size: 14px;
  white-space: pre-line;
}
.card .body p.less {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  line-clamp: 5;
  -webkit-box-orient: vertical;
}
.card .footer {
  padding-top: 0;
  padding-bottom: 0;
}
.card .footer p.card-link {
  font-size: 14px;
  font-weight: bold;
  color: #4a94eb;
  text-decoration: underline;
  cursor: pointer;
}
.card .footer span {
  font-size: 14px;
  cursor: pointer;
}
.card-body.comment-input,
.card-body.comments {
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.card-body.comments {
  padding-top: 0;
  background-color: #f7fcff;
  max-height: 500px;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  width: 15px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #acacac;
  border-radius: 2px;
}
::-webkit-scrollbar-thumb:hover {
  background: #949494;
}
</style>
