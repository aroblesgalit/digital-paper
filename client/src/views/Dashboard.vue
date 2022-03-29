<template>
  <div class="d-flex justify-content-center">
    <div class="card">
      <div class="card-body d-flex justify-content-between">
        <h2>Posts</h2>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#postModal"
        >
          Create
        </button>
        <!-- Modal -->
        <div
          class="modal fade"
          id="postModal"
          tabindex="-1"
          aria-labelledby="createPost"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-center" id="createPost">
                  Create a post
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form class="row g-3">
                  <div class="col-12">
                    <label for="inputTitle" class="form-label">Title</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputTitle"
                      placeholder="Title"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="inputCategory" class="form-label"
                      >Category</label
                    >
                    <select id="inputCategory" class="form-select">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label for="inputImage" class="form-label">Image</label>
                    <input type="text" class="form-control" id="inputImage" />
                  </div>
                  <div class="col-12">
                    <label for="inputBody" class="form-label">Body</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputBody"
                      placeholder="Body"
                    />
                  </div>
                  <div class="col-12">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="publicCheck"
                      />
                      <label class="form-check-label" for="publicCheck">
                        Make public
                      </label>
                    </div>
                  </div>
                  <div class="col-12 d-flex justify-content-end">
                    <button
                      type="button"
                      class="btn btn-outline-secondary me-3"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="submit" class="btn btn-primary">
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card-body">
        <TablePosts />
      </div>
    </div>
  </div>
</template>

<script>
import TablePosts from '../components/TablePosts.vue'

export default {
  name: 'Dashboard',
  components: {
    TablePosts
  }
}
</script>

<style scoped>
.card {
  width: 1000px;
  max-width: 90vw;
}
table thead {
  font-size: 12px;
  color: #666;
}
span {
  visibility: hidden;
  cursor: pointer;
}
tbody > tr:hover span {
  visibility: visible;
}
.modal form label {
  font-size: 12px;
}
.modal-header h5 {
  width: 100%;
}
</style>
