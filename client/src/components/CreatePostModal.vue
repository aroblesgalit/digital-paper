<template>
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
                v-model="title"
                type="text"
                class="form-control"
                id="inputTitle"
                placeholder="Title"
              />
            </div>
            <div class="col-md-6">
              <label for="inputCategory" class="form-label">Category</label>
              <select v-model="category" id="inputCategory" class="form-select">
                <option disabled value="">Choose...</option>
                <option>poetry</option>
                <option>story</option>
                <option>journal</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="inputImage" class="form-label">Image</label>
              <input
                v-model="image"
                type="text"
                class="form-control"
                id="inputImage"
              />
            </div>
            <div class="col-12">
              <label for="inputBody" class="form-label">Body</label>
              <input
                v-model="body"
                type="text"
                class="form-control"
                id="inputBody"
                placeholder="Body"
              />
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  v-model="isPublic"
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
</template>

<script>
export default {
  name: 'CreatePostModal',
  data () {
    return {
      category: '',
      title: '',
      body: '',
      image: '',
      author: '',
      isPublic: null
    }
  }
}
</script>

<style scoped>
.modal form label {
  font-size: 12px;
}
.modal-header h5 {
  width: 100%;
}
</style>
