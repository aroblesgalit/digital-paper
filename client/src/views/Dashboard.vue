<template>
  <div class="d-flex justify-content-center">
    <div class="card">
      <div class="card-body d-flex justify-content-between">
        <h2>Posts</h2>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#postModal"
        >
          Create
        </button>
        <!-- Modal -->
        <CreatePostModal />
      </div>

      <div class="card-body">
        <TablePosts :posts="userPosts" />
      </div>
    </div>
  </div>
</template>

<script>
import TablePosts from '../components/TablePosts.vue'
import CreatePostModal from '../components/CreatePostModal.vue'
import { createNamespacedHelpers } from 'vuex'
const postModule = createNamespacedHelpers('post')
const userModule = createNamespacedHelpers('user')

export default {
  name: 'Dashboard',
  components: {
    TablePosts,
    CreatePostModal
  },
  methods: {
    ...postModule.mapActions(['getUserPosts'])
  },
  async created () {
    try {
      await this.getUserPosts({
        _id: this.user._id
      })
    } catch (err) {
      console.error(err)
    }
  },
  computed: {
    ...postModule.mapState(['userPosts']),
    ...userModule.mapState(['user'])
  }
}
</script>

<style scoped>
.card {
  width: 1000px;
  max-width: 90vw;
}
</style>
