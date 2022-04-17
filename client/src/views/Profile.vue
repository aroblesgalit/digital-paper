<template>
  <div class="d-flex justify-content-center">
    <div class="card">
      <div class="card-body d-flex justify-content-between">
        <h2>Welcome, {{ user.firstName ? user.firstName : user.username }}!</h2>
        <button @click="formSubmit" type="button" class="btn btn-primary">
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

      <div class="card-body">
        <button type="button" class="btn btn-danger" @click="handleDelete">
          Delete account
        </button>
      </div>

      <div class="card-body" v-show="updateSuccessful != null">
        <div class="alert alert-success" role="alert" v-show="updateSuccessful">
          Your profile was updated!
        </div>
        <div class="alert alert-danger" role="alert" v-show="!updateSuccessful">
          Oh no, something went wrong! Please try again...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const userModule = createNamespacedHelpers('user')

export default {
  name: 'Profile',
  data () {
    return {
      image: '',
      firstName: '',
      lastName: '',
      updateSuccessful: null
    }
  },
  methods: {
    ...userModule.mapActions(['updateUser', 'deleteAccount']),
    async formSubmit () {
      try {
        const payload = {
          _id: this.user._id,
          image: this.image,
          firstName: this.firstName,
          lastName: this.lastName
        }
        await this.updateUser(payload)
        this.updateSuccessful = true
        setTimeout(() => {
          this.updateSuccessful = null
        }, 5000)
      } catch (err) {
        console.error(err)
        this.updateSuccessful = false
        setTimeout(() => {
          this.updateSuccessful = null
        }, 5000)
      }
    },
    async handleDelete () {
      try {
        if (confirm('Are you sure you want to delete your account?')) {
          const userDeleted = await this.deleteAccount()
          if (userDeleted.data) {
            console.log('Your account is now deleted.')
          }
        }
      } catch (err) {
        console.error(err)
      }
    }
  },
  created () {
    this.image = this.user.image
    this.firstName = this.user.firstName
    this.lastName = this.user.lastName
  },
  computed: {
    ...userModule.mapState(['user'])
  }
}
</script>

<style scoped>
.card {
  width: 1000px;
  max-width: 90vw;
}
</style>
