<template>
  <div>
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  components: { Nav }
}
</script>

<style>
body {
  color: #303030;
}
</style>
