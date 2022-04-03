<template>
  <tr>
    <td scope="row">{{ post.title }}</td>
    <td>{{ formattedDate }}</td>
    <td>{{ post.likes.length }}</td>
    <td>{{ numOfComments }}</td>
    <td>
      <span class="bi bi-pencil me-3" @click="setPostToEdit(post._id)"></span>
      <!-- Inside span above
      data-bs-toggle="modal"
        data-bs-target="#editPostModal"
       -->
      <!-- <EditPostModal /> -->
      <span @click="onDelete(post._id)" class="bi bi-trash3"></span>
    </td>
  </tr>
</template>

<script>
// import EditPostModal from './EditPostModal.vue'
import { createNamespacedHelpers } from 'vuex'
const postModule = createNamespacedHelpers('post')

export default {
  name: 'TablePostItem',
  data () {
    return {
      // passedData: {}
    }
  },
  props: {
    post: Object
  },
  // components: { EditPostModal },
  methods: {
    ...postModule.mapActions(['deletePost', 'setPostToEdit']),
    async onDelete (id) {
      try {
        if (confirm('Delete the post "' + this.post.title + '"?')) {
          await this.deletePost({
            id: id
          })
        }
      } catch (err) {
        console.error(err)
      }
    }
  },
  computed: {
    formattedDate () {
      let date = new Date(this.post.createdAt)
      let month = date.getMonth()
      let day = date.getDate()
      let year = date.getFullYear()

      return month + '/' + day + '/' + year
    },
    numOfComments () {
      return this.post.comments.length
    }
  }
}
</script>

<style scoped>
span {
  visibility: hidden;
  cursor: pointer;
}
tbody > tr:hover span {
  visibility: visible;
}
</style>
