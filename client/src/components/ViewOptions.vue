<template>
  <div id="view-options-wrapper" class="mb-2 d-flex">
    <div class="d-flex align-items-end me-3">
      <span class="me-2">Filter:</span>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle fw-bold"
            href="#"
            id="filterDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ filterBy }}
          </a>
          <ul class="dropdown-menu" aria-labelledby="filterDropdown">
            <li>
              <a class="dropdown-item" href="#" @click="setFilterBy('all')"
                >All</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#" @click="setFilterBy('poetry')"
                >Poetry</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#" @click="setFilterBy('story')"
                >Story</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#" @click="setFilterBy('journal')"
                >Journal</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#" @click="setFilterBy('lyrics')"
                >Lyrics</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="d-flex align-items-end me-3">
      <span class="me-2">Sort:</span>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle fw-bold"
            href="#"
            id="sortDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ sortBy }}
          </a>
          <ul class="dropdown-menu" aria-labelledby="sortDropdown">
            <li>
              <a class="dropdown-item" href="#" @click="setSortBy('new')"
                >New</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#" @click="setSortBy('top')"
                >Top</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const postModule = createNamespacedHelpers('post')

export default {
  name: 'ViewOptions',
  methods: {
    ...postModule.mapActions(['setFilterBy', 'setSortBy'])
  },
  computed: {
    ...postModule.mapState(['filterBy', 'sortBy'])
  }
}
</script>

<style scoped>
#view-options-wrapper {
  width: 450px;
  max-width: 90vw;
  font-size: 12px;
}
a {
  color: #303030;
}
.nav-link {
  padding: 0;
  text-transform: capitalize;
}
</style>
