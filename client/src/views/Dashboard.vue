<template>
  <div class="d-flex justify-content-center">
    <div class="card">
      <div class="card-body d-flex justify-content-between">
        <h2>Posts</h2>
        <button class="btn btn-primary">
          Create
        </button>
      </div>
      <div class="card-body">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Date created</th>
              <th scope="col">Likes</th>
              <th scope="col">Comments</th>
              <th class="col">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">Dreams</td>
              <td>03/18/22</td>
              <td>24</td>
              <td>7</td>
              <td>
                <span class="bi bi-pencil me-3"></span>
                <span class="bi bi-trash3"></span>
              </td>
            </tr>
            <tr>
              <td scope="row">Dreams</td>
              <td>03/18/22</td>
              <td>24</td>
              <td>7</td>
              <td>
                <span class="bi bi-pencil me-3"></span>
                <span class="bi bi-trash3"></span>
              </td>
            </tr>
            <tr>
              <td scope="row">Dreams</td>
              <td>03/18/22</td>
              <td>24</td>
              <td>7</td>
              <td>
                <span class="bi bi-pencil me-3"></span>
                <span class="bi bi-trash3"></span>
              </td>
            </tr>
            <tr>
              <td scope="row">Dreams</td>
              <td>03/18/22</td>
              <td>24</td>
              <td>7</td>
              <td>
                <span class="bi bi-pencil me-3"></span>
                <span class="bi bi-trash3"></span>
              </td>
            </tr>
            <tr>
              <td scope="row">Dreams</td>
              <td>03/18/22</td>
              <td>24</td>
              <td>7</td>
              <td>
                <span class="bi bi-pencil me-3"></span>
                <span class="bi bi-trash3"></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
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
</style>
