<template>
  <div class="d-flex flex-column align-items-center">
    <Post @click="fetch" />
  </div>
</template>

<script>
import Post from '../components/Post.vue'
import { createNamespacedHelpers } from 'vuex'
const userModule = createNamespacedHelpers('user')
const postModule = createNamespacedHelpers('post')

export default {
  name: 'Home',
  components: { Post },
  methods: {
    ...postModule.mapActions(['getUserPosts', 'getPublicPosts']),
    async fetch () {
      await this.getUserPosts({
        id: '6235727a53f932c232da9a9a'
      })
      await this.getPublicPosts()
    }
  },
  computed: {
    ...userModule.mapGetters(['isAuthenticated'])
  }
}
</script>

<style scoped></style>
