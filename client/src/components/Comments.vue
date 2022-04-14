<template>
  <div class="card-body d-flex">
    <div class="me-2">
      <img src="" alt="User avatar" />
      <!-- <div v-else class="avatar">
        {{ post.author.username.split('')[0] }}
      </div> -->
    </div>
    <form>
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
        <div class="input-group-text">@</div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  data () {
    return {
      body: ''
    }
  }
}
</script>

<style scoped></style>
