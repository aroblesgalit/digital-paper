<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Digital Paper</router-link>
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li v-if="!isAuthenticated" class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item">
            <a v-if="isAuthenticated" class="nav-link" href="#">Logout</a>
            <router-link v-else class="nav-link" to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Nav',
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>

<style scoped></style>
