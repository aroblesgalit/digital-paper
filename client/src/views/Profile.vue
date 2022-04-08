<template>
  <div class="d-flex justify-content-center">
    <div class="card">
      <div class="card-body d-flex justify-content-between">
        <h2>Welcome, {{ user.username }}!</h2>
        <button type="button" class="btn btn-primary">
          Save changes
        </button>
      </div>

      <div class="card-body">
        <form class="row g-3">
          <div class="col-12">
            <label for="profileImage" class="form-label">Image</label>
            <input
              v-model="image"
              type="text"
              class="form-control"
              id="profileImage"
            />
          </div>
          <div class="col-md-6">
            <label for="firstName" class="form-label">First name</label>
            <input
              v-model="firstName"
              type="text"
              class="form-control"
              id="firstName"
            />
          </div>
          <div class="col-md-6">
            <label for="lastName" class="form-label">Last name</label>
            <input
              v-model="lastName"
              type="text"
              class="form-control"
              id="lastName"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const userModel = createNamespacedHelpers('user')

export default {
  name: 'Profile',
  data () {
    return {
      image: '',
      firstName: '',
      lastName: ''
    }
  },
  created () {
    console.log(this.user)
    this.image = this.user.image
    this.firstName = this.user.firstName
    this.lastName = this.user.lastName
  },
  computed: {
    ...userModel.mapState(['user'])
  }
}
</script>

<style scoped>
.card {
  width: 1000px;
  max-width: 90vw;
}
</style>
