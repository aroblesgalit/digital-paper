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
            ref="btnClose"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="formSubmit" class="row g-3">
            <div class="col-12">
              <label for="inputTitle" class="form-label">Title</label>
              <input
                v-model="title"
                type="text"
                class="form-control"
                id="inputTitle"
                placeholder="Title"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="inputCategory" class="form-label">Category</label>
              <select
                v-model="category"
                id="inputCategory"
                class="form-select"
                required
              >
                <option disabled value="">Choose...</option>
                <option>poetry</option>
                <option>story</option>
                <option>journal</option>
                <option>lyrics</option>
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
              <div class="grow-wrap" ref="growWrap">
                <textarea
                  v-model="body"
                  class="form-control"
                  id="inputBody"
                  placeholder="Start typing here..."
                  @input="updateHeight"
                  required
                ></textarea>
              </div>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input v-model="isPublic" class="form-check-input"
                type="checkbox" id="isPublicCheck" value= />
                <label class="form-check-label" for="publicCheck">
                  Make public
                </label>
              </div>
            </div>
            <div v-show="created" class="col-12">
              <div class="alert alert-success" role="alert">
                You have created a new post succesfully! Taking you back to the
                dashboard...
              </div>
            </div>
            <div v-show="created === false" class="col-12">
              <div class="alert alert-danger" role="alert">
                Oh no! Something went wrong. Please try again later.
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
import { createNamespacedHelpers } from 'vuex'
const userModule = createNamespacedHelpers('user')
const postModule = createNamespacedHelpers('post')

export default {
  name: 'CreatePostModal',
  props: {
    type: String
  },
  data () {
    return {
      category: '',
      title: '',
      body: '',
      image: '',
      author: '',
      isPublic: false,
      created: null
    }
  },
  methods: {
    ...postModule.mapActions(['createPost']),
    async formSubmit () {
      try {
        const data = {
          category: this.category,
          title: this.title,
          body: this.body,
          image: this.image,
          author: this.user._id,
          isPublic: this.isPublic
        }
        await this.createPost(data)
        this.created = true
        setTimeout(() => {
          this.$refs.btnClose.click()
          this.category = ''
          this.title = ''
          this.body = ''
          this.image = ''
          this.author = ''
          this.isPublic = false
          this.created = null
          this.updateHeight()
        }, 3000)
      } catch (err) {
        this.created = false
        setTimeout(() => {
          this.created = null
          this.updateHeight()
        }, 3000)
        console.error(err)
      }
    },
    updateHeight () {
      this.$refs.growWrap.dataset.replicatedValue = this.body
    }
  },
  computed: {
    ...userModule.mapState(['user'])
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
.grow-wrap {
  display: grid;
}
.grow-wrap::after {
  content: attr(data-replicated-value) ' ';
  white-space: pre-wrap;
  visibility: hidden;
}
.grow-wrap > textarea {
  resize: none;
  overflow: hidden;
}
.grow-wrap > textarea,
.grow-wrap::after {
  padding: 0.5rem;
  font: inherit;
  grid-area: 1 / 1 / 2 / 2;
}
</style>
