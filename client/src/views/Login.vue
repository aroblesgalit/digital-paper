<template>
  <div class="wrapper d-flex flex-column align-items-center">
    <div class="card mb-3">
      <div class="card-body">
        <h1 class="card-title h3 mb-3 fw-normal text-center">Login</h1>
        <form @submit.prevent="formSubmit" class="d-flex flex-column">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input
              v-model="username"
              id="username"
              type="text"
              class="form-control"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              v-model="password"
              id="password"
              type="password"
              class="form-control"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary align-self-end">
            Log in
          </button>
        </form>
      </div>
    </div>
    <p>
      Don't have an account?
      <router-link to="/register">Register here</router-link>
    </p>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('user')

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['loginUser', 'checkLoginStatus']),
    async formSubmit () {
      try {
        await this.loginUser({
          username: this.username,
          password: this.password
        })
        await this.checkLoginStatus()
      } catch (err) {
        console.error(err.message)
      }
    }
  }
}
</script>

<style scoped>
.card {
  max-width: 400px;
  width: 100%;
  margin: 0 16px;
}
.wrapper {
  padding: 0 16px;
}
@media (min-width: 768px) {
  .wrapper {
    padding: 0;
  }
}
</style>
