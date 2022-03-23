<template>
  <div class="d-flex flex-column align-items-center">
    <div class="card mw-100 mb-3">
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
    <p>Don't have an account? Register here</p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async formSubmit () {
      try {
        console.log(this.username, this.password)
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style scoped>
.card {
  width: 400px;
}
</style>
