<template>
  <div class="d-flex flex-column align-items-center">
    <div class="card mw-100 mb-3">
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
    <p>Already have an account? Log in here</p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

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
        }

        await this.registerUser({
          username: this.username,
          password: this.password
        })
      } catch (err) {
        console.error(err)
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
  width: 400px;
}
</style>
