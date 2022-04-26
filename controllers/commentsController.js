const db = require('../models')

// Define methods for comments
module.exports = {
  createComment: function (req, res) {
    db.Comment.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  deleteComment: async function (req, res) {
    try {
      const commentToDelete = await db.Comment.findOne({ _id: req.params.id })
      await commentToDelete.deleteOne()
      res.json(commentToDelete)
    } catch (err) {
      res.status(422).json(err)
    }
  }
}
