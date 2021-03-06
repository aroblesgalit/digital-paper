import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import EditPost from '../views/EditPost.vue'
import Profile from '../views/Profile.vue'
import Favorites from '../views/Favorites.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      authRequired: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      authRequired: false
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      authRequired: true
    }
  },
  {
    path: '/post/:id',
    name: 'EditPost',
    component: EditPost,
    meta: {
      authRequired: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      authRequired: true
    }
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
    meta: {
      authRequired: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['user/isAuthenticated']
  if ('authRequired' in to.meta && to.meta.authRequired) {
    if (isAuthenticated) {
      next()
    } else {
      next('/login')
    }
  } else if ('authRequired' in to.meta && !to.meta.authRequired) {
    if (isAuthenticated) {
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
