<template>
  <form @submit.prevent="formSubmit" class="row g-3">
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
      <input v-model="image" type="text" class="form-control" id="inputImage" />
    </div>
    <div class="col-12">
      <label for="inputBody" class="form-label">Body</label>
      <textarea
        v-model="body"
        class="form-control"
        id="inputBody"
        placeholder="Start typing here..."
        required
      ></textarea>
    </div>
    <div class="col-12">
      <div class="form-check">
        <input v-model="isPublic" class="form-check-input" type="checkbox"
        id="isPublicCheck" value= />
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
        Edit
      </button>
    </div>
  </form>
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
        const data = {
          id: this.id,
          category: this.category,
          title: this.title,
          body: this.body,
          image: this.image,
          author: this.user.id,
          isPublic: this.isPublic
        }
        await this.updatePost(data)
      } catch (err) {
        console.error(err)
      }
    }
  },
  created () {
    console.log(this.postToEdit)
  },
  computed: {
    ...userModule.mapState(['user']),
    ...postModule.mapState(['postToEdit'])
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
