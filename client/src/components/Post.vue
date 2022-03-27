<template>
  <div class="card">
    <div class="header card-body d-flex">
      <div class="me-3">
        <img src="https://via.placeholder.com/60" alt="" />
      </div>
      <div class="d-flex flex-column justify-content-center">
        <p class="m-0">Persons name</p>
        <span>1d</span>
      </div>
    </div>
    <div class="body card-body">
      <h5 class="card-title">Post title</h5>
      <p class="card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non quam
        quis nibh elementum lacinia. Curabitur maximus dapibus risus sed porta.
        Quisque enim elit, cursus a elit a, elementum gravida leo. Donec vitae
        massa et tellus tempus pretium. Aliquam volutpat porttitor magna in
        facilisis. Sed vel placerat leo, ac vehicula nulla. Duis odio leo,
        consequat at viverra nec, iaculis eu odio. Duis facilisis, dolor vel
        consequat maximus, dolor lacus tempus neque, a malesuada felis mi ut
        lacus. Integer sed augue ut nulla rutrum pretium quis vel purus. Etiam
        quam odio, gravida non quam et, venenatis consequat nunc. Sed pretium
        placerat ullamcorper. Suspendisse vestibulum imperdiet ligula et
        faucibus. In in blandit arcu, et pellentesque tortor.
      </p>
    </div>
    <div class="footer card-body d-flex justify-content-between">
      <a href="#" class="card-link">Read more</a>
      <div class="d-flex">
        <div class="me-4"><span class="bi bi-heart"> 24</span></div>
        <div><span class="bi bi-chat"> 7</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post'
}
</script>

<style scoped>
.card {
  width: 450px;
  max-width: 90vw;
}
.card .header img {
  border-radius: 50%;
}
.card .header p {
  font-size: 18px;
  font-weight: 600;
}
.card .header span {
  font-size: 12px;
}
.card .body h5 {
  font-weight: bold;
}
.card .body p {
  font-size: 14px;
}
.card .footer a {
  font-size: 14px;
  font-weight: bold;
  color: #4a94eb;
}
.card .footer span {
  font-size: 14px;
}
</style>
