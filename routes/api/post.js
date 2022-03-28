const router = require('express').Router()
const postsController = require('../../controllers/postsController')

// Match with '/api/posts'
router
  .route('/')
  .get(postsController.getPublicPosts)
  .get(postsController.getUserPosts)
  .post(postsController.createPost)

// Match with '/api/posts/:id'
router
  .route('/:id')
  .put(postsController.updatePost)
  .delete(postsController.deletePost)

module.exports = router
