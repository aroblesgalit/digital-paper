const router = require('express').Router()
const postsController = require('../../controllers/postsController')

// Match with '/api/posts'
router
  .route('/')
  .get(postsController.getPublicPosts)
  .post(postsController.createPost)

// Match with '/api/posts/user/:id'
router.route('/user/:id').get(postsController.getUserPosts)

// Match with '/api/posts/:id'
router
  .route('/:id')
  .put(postsController.updatePost)
  .delete(postsController.deletePost)
  .get(postsController.getPostById)
  .patch(postsController.addCommentToPost)

module.exports = router
