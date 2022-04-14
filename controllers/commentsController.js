const db = require('../models')

// Define methods for comments
module.exports = {
  createComment: function (req, res) {
    db.Comment.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  deleteComment: function (req, res) {
    db.Comment.deleteOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
