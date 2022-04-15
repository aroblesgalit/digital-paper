<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Digital Paper</router-link>
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li v-if="!isAuthenticated" class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li v-if="isAuthenticated" class="nav-item">
            <router-link class="nav-link" to="/dashboard"
              >Dashboard</router-link
            >
          </li>
          <li v-if="isAuthenticated" class="nav-item">
            <router-link class="nav-link" to="/">Favorites</router-link>
          </li>
          <li v-if="isAuthenticated" class="nav-item">
            <router-link class="nav-link" to="/profile">Profile</router-link>
          </li>
          <li class="nav-item">
            <a
              v-if="isAuthenticated"
              @click="handleLogout"
              class="nav-link"
              href="#"
              >Logout</a
            >
            <router-link v-else class="nav-link" to="/login">Login</router-link>
          </li>
          <li v-if="!isAuthenticated" class="nav-item">
            <a href="#" class="nav-link" @click="handleDemoLogin">Demo login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('user')

export default {
  name: 'Nav',
  methods: {
    ...mapActions(['logoutUser', 'demoLogin', 'checkLoginStatus']),
    async handleLogout () {
      try {
        await this.logoutUser()
        await this.$router.push({ name: 'Login' })
      } catch (err) {
        console.error(err)
      }
    },
    async handleDemoLogin () {
      try {
        await this.demoLogin()
        await this.checkLoginStatus()
        await this.$router.push({ name: 'Home' })
      } catch (err) {
        console.error(err)
      }
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>

<style scoped></style>
