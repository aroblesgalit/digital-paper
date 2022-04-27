const router = require('express').Router()
const commentsController = require('../../controllers/commentsController')

// Match with '/api/comments'
router.route('/').post(commentsController.createComment)

// Match with '/api/comments/:id'
router
  .route('/:id')
  .get(commentsController.getCommentById)
  .delete(commentsController.deleteComment)
  .put(commentsController.updateComment)

module.exports = router
