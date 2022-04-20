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
          <li v-if="isAuthenticated" class="nav-item d-flex align-items-center">
            <img v-if="user.image" :src="user.image" alt="User avatar" />
            <div v-else class="avatar">
              {{
                user.firstName
                  ? user.firstName.split('')[0]
                  : user.username.split('')[0]
              }}
            </div>
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
const userModule = createNamespacedHelpers('user')

export default {
  name: 'Nav',
  methods: {
    ...userModule.mapActions(['logoutUser', 'demoLogin', 'checkLoginStatus']),
    async handleLogout () {
      try {
        await this.logoutUser()
      } catch (err) {
        console.error(err)
      }
    },
    async handleDemoLogin () {
      try {
        await this.demoLogin()
        await this.checkLoginStatus()
      } catch (err) {
        console.error(err)
      }
    }
  },
  computed: {
    ...userModule.mapGetters(['isAuthenticated']),
    ...userModule.mapState(['user'])
  }
}
</script>

<style scoped>
img {
  height: 32px;
  width: 32px;
  border-radius: 50%;
}
.avatar {
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #4a94eb;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 80px;
  overflow: hidden;
}
</style>
