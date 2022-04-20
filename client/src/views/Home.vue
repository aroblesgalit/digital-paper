<template>
  <div class="d-flex flex-column align-items-center">
    <Post v-for="item in publicPosts" :key="item._id" :post="item" />
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
    ...postModule.mapActions(['getPublicPosts']),
    ...userModule.mapActions(['checkLoginStatus'])
  },
  async created () {
    try {
      await this.getPublicPosts()
    } catch (err) {
      console.error(err)
    }
  },
  computed: {
    ...userModule.mapGetters(['isAuthenticated']),
    ...postModule.mapState(['publicPosts'])
  }
}
</script>

<style scoped></style>
