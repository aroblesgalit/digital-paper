const db = require('../models')

// Define methods for posts
module.exports = {
  getAllPosts: function (req, res) {
    db.Post.find({})
      .sort({ created_on: 1 })
      .then(dbModels => res.json(dbModels))
      .catch(err => res.status(422).json(err))
  },
  createPost: function (req, res) {
    db.Post.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  updatePost: function (req, res) {
    db.Post.findByIdAndUpdate(req.body.id, req.body, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  deletePost: function (req, res) {
    db.Post.deleteOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
