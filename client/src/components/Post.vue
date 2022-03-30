<template>
  <div class="card">
    <div class="header card-body d-flex">
      <div class="me-3">
        <img src="https://via.placeholder.com/60" alt="" />
      </div>
      <div class="d-flex flex-column justify-content-center">
        <p class="m-0">{{ post.author }}</p>
        <span>{{ formattedTime }}</span>
      </div>
    </div>
    <div class="body card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">
        {{ post.body }}
      </p>
    </div>
    <div class="footer card-body d-flex justify-content-between">
      <a href="#" class="card-link">Read more</a>
      <div class="d-flex">
        <div class="me-4">
          <span class="bi bi-heart">&nbsp;{{ post.likes }}</span>
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
  computed: {
    formattedTime () {
      let datePosted = new Date(this.post.createdAt)
      let dateNow = new Date()

      if (
        datePosted.getMonth() === dateNow.getMonth() &&
        datePosted.getDate() === dateNow.getDate() &&
        datePosted.getFullYear() === dateNow.getFullYear()
      ) {
        let difference = dateNow - datePosted
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
      } else {
        return 'Posted day(s) ago!'
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
.card .header img {
  border-radius: 50%;
}
.card .header p {
  font-size: 18px;
  font-weight: 600;
}
.card .header span {
  font-size: 12px;
}
.card .body h5 {
  font-weight: bold;
}
.card .body p {
  font-size: 14px;
}
.card .footer a {
  font-size: 14px;
  font-weight: bold;
  color: #4a94eb;
}
.card .footer span {
  font-size: 14px;
}
</style>
