<template>
  <div>
    <h1 class="h3 mb-3 fw-normal">Home</h1>
    <p>{{ isAuthenticated ? 'You are logged in!' : 'Please log in.' }}</p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('user')

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>

<style scoped></style>
