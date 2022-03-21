<template>
  <div class="d-flex flex-column align-items-center">
    <div class="card mw-100 mb-3">
      <div class="card-body">
        <h1 class="card-title h3 mb-3 fw-normal text-center">Register</h1>
        <form class="d-flex flex-column">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input id="username" type="text" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              id="password"
              type="password"
              class="form-control"
              required
            />
          </div>
          <div class="mb-3">
            <label for="confirm" class="form-label">Confirm password</label>
            <input id="confirm" type="password" class="form-control" required />
          </div>
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
export default {
  name: 'Register'
}
</script>

<style scoped>
.card {
  width: 400px;
}
</style>
