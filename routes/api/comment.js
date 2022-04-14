const router = require('express').Router()
const commentsController = require('../../controllers/commentsController')

// Match with '/api/comments'
router.route('/').post(commentsController.createComment)

// Match with '/api/comments/:id'
router.route('/:id').delete(commentsController.deleteComment)

module.exports = router
