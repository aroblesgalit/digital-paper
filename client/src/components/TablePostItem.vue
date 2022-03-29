<template>
  <tr>
    <td scope="row">{{ post.title }}</td>
    <td>{{ formattedDate }}</td>
    <td>{{ post.likes }}</td>
    <td>{{ numOfComments }}</td>
    <td>
      <span class="bi bi-pencil me-3"></span>
      <span class="bi bi-trash3"></span>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'TablePostItem',
  props: {
    post: Object
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
