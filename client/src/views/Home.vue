<template>
  <div class="d-flex flex-column align-items-center">
    <Post @click="fetch" />
  </div>
</template>

<script>
import Post from '../components/Post.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('user')
const { mapActions } = createNamespacedHelpers('post')

export default {
  name: 'Home',
  components: { Post },
  methods: {
    ...mapActions(['getUserPosts']),
    async fetch () {
      await this.getUserPosts({
        id: '6235727a53f932c232da9a9a'
      })
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>

<style scoped></style>
