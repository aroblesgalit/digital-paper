<template>
  <div class="d-flex comment-wrapper py-3">
    <div class="me-2">
      <img
        v-if="comment.commenter.image"
        :src="comment.commenter.image"
        alt="Commenter avatar"
      />
      <div v-else class="avatar">
        {{ comment.commenter.username.split('')[0] }}
      </div>
    </div>
    <div class="mt-1 d-flex justify-content-between w-100">
      <div class="w-100">
        <h4>
          {{
            comment.commenter.firstName && comment.commenter.lastName
              ? comment.commenter.firstName + ' ' + comment.commenter.lastName
              : comment.commenter.username
          }}
        </h4>
        <span>{{ formattedTime }}</span>
        <form
          v-if="
            Object.keys(commentToEdit).length > 0 &&
              commentToEdit._id === comment._id &&
              isAuthenticated &&
              user._id === comment.commenter._id
          "
        >
          <label class="visually-hidden" for="comment-body">Comment</label>
          <div class="input-group">
            <input
              v-model="commentEditMode.body"
              type="text"
              class="form-control"
              id="comment-body"
              placeholder="Write a comment..."
              required
            />
            <span class="input-group-text" @click="saveEdit"
              ><i class="bi bi-send-check"></i
            ></span>
            <span class="input-group-text" @click="unsetCommentToEdit"
              ><i class="bi bi-x-circle"></i
            ></span>
          </div>
        </form>
        <p v-else>{{ comment.body }}</p>
      </div>
      <div
        class="comment-tools"
        v-show="
          isAuthenticated &&
            user._id === comment.commenter._id &&
            Object.keys(commentToEdit).length === 0
        "
      >
        <span class="bi bi-pencil me-3" @click="onEdit(comment._id)"></span>
        <span class="bi bi-trash3" @click="onDelete(comment._id)"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const userModule = createNamespacedHelpers('user')
const commentModule = createNamespacedHelpers('comment')

export default {
  name: 'Comment',
  props: {
    comment: Object
  },
  data () {
    return {
      commentEditMode: {}
    }
  },
  methods: {
    ...commentModule.mapActions([
      'deleteComment',
      'setCommentToEdit',
      'unsetCommentToEdit'
    ]),
    async onDelete (id) {
      try {
        if (confirm('Are you sure you want to delete this comment?')) {
          await this.deleteComment(id)
        }
      } catch (err) {
        console.error(err)
      }
    },
    async onEdit (id) {
      try {
        await this.setCommentToEdit(id)
        this.commentEditMode = this.commentToEdit
      } catch (err) {
        console.error(err)
      }
    },
    async saveEdit () {
      try {
        console.log(this.body)
      } catch (err) {
        console.error(err)
      }
    }
  },
  computed: {
    ...userModule.mapState(['user']),
    ...userModule.mapGetters(['isAuthenticated']),
    ...commentModule.mapState(['commentToEdit']),
    formattedTime () {
      let datePosted = new Date(this.comment.createdAt)
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
.comment-wrapper {
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
img {
  height: 32px;
  width: 32px;
  border-radius: 50%;
}
.avatar {
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #4a94eb;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 80px;
  overflow: hidden;
}
h4 {
  font-size: 14px;
  line-height: 0.5;
  margin: 0;
}
span {
  font-size: 12px;
}
p {
  font-size: 14px;
  margin: 0;
}
.comment-tools {
  display: none;
}
.comment-wrapper:hover .comment-tools {
  display: block;
}
.comment-tools > span {
  cursor: pointer;
}
form {
  width: 100%;
}
input {
  border-right: none;
}
.input-group-text {
  cursor: pointer;
  background-color: #ffffff;
  border-left: none;
}
.input-group-text:hover .bi-send-check {
  color: rgb(134, 189, 80);
}
.input-group-text:hover .bi-x-circle {
  color: rgb(228, 111, 102);
}
</style>
