<template>
  <div class="d-flex flex-column align-items-center">
    <Post v-for="item in userLikedPosts" :key="item._id" :post="item" />
  </div>
</template>

<script>
import Post from '../components/Post.vue'
import { createNamespacedHelpers } from 'vuex'
const postModule = createNamespacedHelpers('post')

export default {
  name: 'Favorites',
  components: { Post },
  computed: {
    ...postModule.mapGetters(['userLikedPosts'])
  }
}
</script>

<style scoped></style>
