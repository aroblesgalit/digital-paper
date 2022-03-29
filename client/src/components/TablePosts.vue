<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Date created</th>
        <th scope="col">Likes</th>
        <th scope="col">Comments</th>
        <th class="col">&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      <TablePostItem v-for="item in posts" :key="item._id" :post="item" />
    </tbody>
  </table>
</template>

<script>
import TablePostItem from './TablePostItem.vue'

export default {
  name: 'TablePosts',
  components: {
    TablePostItem
  },
  props: {
    posts: Object
  }
}
</script>

<style scoped>
table thead {
  font-size: 12px;
  color: #666;
}
</style>
