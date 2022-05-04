<template>
  <div class="mb-1">
    <div>
      <span>Filter:</span>
      <select class="form-select form-select-sm" aria-label="form select sm">
        <option value="all">All</option>
        <option value="poetry">Poetry</option>
        <option value="story">Story</option>
        <option value="journal">Journal</option>
        <option value="lyrics">Lyrics</option>
      </select>
    </div>
    <div>
      <span>Sort:</span>
      <select class="form-select form-select-sm" aria-label="form select sm">
        <option value="top">Top</option>
        <option value="new">New</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewOptions'
}
</script>

<style scoped></style>
