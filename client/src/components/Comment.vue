<template>
  <div>
    <div>
      <img
        v-if="comment.commenter.image"
        :src="comment.commenter.image"
        alt="Commenter avatar"
      />
      <div v-else class="avatar">
        {{ comment.commenter.username.split('')[0] }}
      </div>
    </div>
    <div>
      <h4>Name</h4>
      <span>date posted</span>
      <p>comment</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    comment: Object
  }
}
</script>

<style scoped>
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
  font-size: 100px;
  overflow: hidden;
}
</style>
