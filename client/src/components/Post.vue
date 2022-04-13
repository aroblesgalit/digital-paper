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
      <div class="d-flex">
        <div class="me-4">
          <span class="bi bi-heart">&nbsp;{{ post.likes.length }}</span>
        </div>
        <div>
          <span class="bi bi-chat">&nbsp;{{ post.comments.length }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: Object
  },
  data () {
    return {
      readMore: false,
      showLink: false
    }
  },
  mounted () {
    if (this.$refs.postBody.clientHeight >= 105) {
      this.showLink = true
    }
  },
  computed: {
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
  height: 60px;
  width: 60px;
  border-radius: 50%;
}
.card .header .avatar {
  height: 60px;
  width: 60px;
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
  height: 100px;
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
}
</style>
