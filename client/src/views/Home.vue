<template>
  <div class="d-flex flex-column align-items-center">
    <ViewOptions />
    <Post v-for="item in currentPosts" :key="item._id" :post="item" />
  </div>
</template>

<script>
import Post from '../components/Post.vue'
import ViewOptions from '../components/ViewOptions.vue'
import { createNamespacedHelpers } from 'vuex'
const userModule = createNamespacedHelpers('user')
const postModule = createNamespacedHelpers('post')

export default {
  name: 'Home',
  components: { Post, ViewOptions },
  methods: {
    ...postModule.mapActions(['getPublicPosts']),
    ...userModule.mapActions(['checkLoginStatus'])
  },
  async created () {
    try {
      await this.getPublicPosts()
    } catch (err) {
      console.error(err.message)
    }
  },
  computed: {
    ...userModule.mapGetters(['isAuthenticated']),
    ...postModule.mapGetters(['currentPosts']),
    ...postModule.mapState(['publicPosts'])
  }
}
</script>

<style scoped></style>
