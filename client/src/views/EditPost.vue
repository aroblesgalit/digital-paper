<template>
  <div class="d-flex justify-content-center">
    <div class="form-wrapper d-flex flex-column justify-align-items-center">
      <h5 class="text-center">
        Edit post
      </h5>
      <form v-if="postToEdit" @submit.prevent="formSubmit" class="row g-3">
        <div class="col-12">
          <label for="inputTitle" class="form-label">Title:</label>
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
              required
              @input="updateHeight"
            ></textarea>
          </div>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input v-model="isPublic" class="form-check-input" type="checkbox"
            id="isPublicCheck" value= />
            <label class="form-check-label" for="isPublicCheck">
              Make public
            </label>
          </div>
        </div>
        <div v-show="updateSuccessful" class="col-12">
          <div class="alert alert-success" role="alert">
            This post is now updated! Taking you back to the dashboard...
          </div>
        </div>
        <div v-show="updateSuccessful === false" class="col-12">
          <div class="alert alert-danger" role="alert">
            Oh no! Something went wrong. Please try again later.
          </div>
        </div>
        <div class="col-12 d-flex justify-content-end">
          <button
            type="button"
            class="btn btn-outline-secondary me-3"
            @click="onCancel"
          >
            Cancel
          </button>
          <button type="submit" class="btn btn-primary">
            Save changes
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const userModule = createNamespacedHelpers('user')
const postModule = createNamespacedHelpers('post')

export default {
  name: 'EditPost',
  data () {
    return {
      id: '',
      category: '',
      title: '',
      body: '',
      image: '',
      author: '',
      isPublic: ''
    }
  },
  methods: {
    ...postModule.mapActions(['updatePost']),
    async formSubmit () {
      try {
        const payload = {
          id: this.id,
          category: this.category,
          title: this.title,
          body: this.body,
          image: this.image,
          author: this.user._id,
          isPublic: this.isPublic
        }
        await this.updatePost(payload)
        setTimeout(() => {
          this.$router.push({ name: 'Dashboard' })
        }, 3000)
      } catch (err) {
        console.error(err.message)
      }
    },
    onCancel () {
      this.$router.push({ name: 'Dashboard' })
    },
    updateHeight () {
      this.$refs.growWrap.dataset.replicatedValue = this.body
    }
  },
  created () {
    this.id = this.postToEdit._id
    this.category = this.postToEdit.category
    this.title = this.postToEdit.title
    this.body = this.postToEdit.body
    this.image = this.postToEdit.image
    this.author = this.postToEdit.author
    this.isPublic = this.postToEdit.isPublic
  },
  mounted () {
    this.$refs.growWrap.dataset.replicatedValue = this.postToEdit.body
  },
  computed: {
    ...userModule.mapState(['user']),
    ...postModule.mapState(['postToEdit', 'updateSuccessful'])
  }
}
</script>

<style scoped>
.form-wrapper {
  width: 1000px;
  max-width: 90vw;
}
form label {
  font-size: 12px;
}
h5 {
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
