<template>
  <div class="wrapper d-flex flex-column align-items-center">
    <div class="card mb-3">
      <div class="card-body">
        <h1 class="card-title h3 mb-3 fw-normal text-center">Register</h1>
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
          <div class="mb-3">
            <label for="confirm" class="form-label">Confirm password</label>
            <input
              v-model="confirm"
              id="confirm"
              type="password"
              class="form-control"
              required
            />
          </div>
          <p v-show="registration">{{ registration }}</p>
          <button type="submit" class="btn btn-primary align-self-end">
            Submit
          </button>
        </form>
      </div>
    </div>
    <p>
      Already have an account?
      <router-link to="/login">Log in here</router-link>
    </p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapState } = createNamespacedHelpers('user')

export default {
  name: 'Register',
  data () {
    return {
      username: '',
      password: '',
      confirm: ''
    }
  },
  methods: {
    ...mapActions(['registerUser']),
    async formSubmit () {
      try {
        if (this.password !== this.confirm) {
          return alert('Please make sure password matches.')
        } else if (
          this.username.indexOf(' ') >= 0 ||
          this.password.indexOf(' ') >= 0
        ) {
          return alert(
            "Please don't include any spaces in your username or password."
          )
        }

        await this.registerUser({
          username: this.username,
          password: this.password
        })
      } catch (err) {
        console.error(err.message)
      }
    }
  },
  computed: {
    ...mapState(['registration'])
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
