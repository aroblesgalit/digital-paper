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

// Match with '/api/posts/like/:id'
router.route('/like/:id').patch(postsController.likePost)

// Match with '/api/posts/unline/:id'
router.route('/unlike/:id').patch(postsController.unlikePost)

module.exports = router
