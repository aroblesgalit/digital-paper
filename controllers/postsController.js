const db = require('../models')

// Define methods for posts
module.exports = {
  getPublicPosts: function (req, res) {
    db.Post.find({ isPublic: true })
      .populate({
        path: 'author',
        select: '_id username firstName lastName image'
      })
      .sort({ createdAt: -1 })
      .then(dbModels => res.json(dbModels))
      .catch(err => res.status(422).json(err))
  },
  getUserPosts: function (req, res) {
    db.Post.find({ author: req.params.id })
      .sort({ createdAt: -1 })
      .then(dbModels => res.json(dbModels))
      .catch(err => res.status(422).json(err))
  },
  createPost: function (req, res) {
    db.Post.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  updatePost: function (req, res) {
    db.Post.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  deletePost: function (req, res) {
    db.Post.deleteOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  getPostById: function (req, res) {
    db.Post.findOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
