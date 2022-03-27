<template>
  <div class="d-flex flex-column align-items-center">
    <Post />
  </div>
</template>

<script>
import Post from '../components/Post.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('user')

export default {
  name: 'Home',
  components: { Post },
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>

<style scoped></style>
