const db = require('../models')

// Define methods for posts
module.exports = {
  getPublicPosts: function (req, res) {
    db.Post.find({ isPublic: true })
      .populate([
        {
          path: 'author',
          select: '_id username firstName lastName image'
        },
        {
          path: 'comments',
          populate: {
            path: 'commenter',
            select: '_id username firstName lastName image'
          }
        }
      ])
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
  deletePost: async function (req, res) {
    try {
      const postToDelete = await db.Post.findOne({ _id: req.params.id })
      await postToDelete.deleteOne()
      res.json(postToDelete)
    } catch (err) {
      res.status(422).json(err)
    }
  },
  getPostById: function (req, res) {
    db.Post.findOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  addCommentToPost: function (req, res) {
    db.Post.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          comments: req.body._id
        }
      },
      { new: true }
    )
      .populate([
        {
          path: 'author',
          select: '_id username firstName lastName image'
        },
        {
          path: 'comments',
          populate: {
            path: 'commenter',
            select: '_id username firstName lastName image'
          }
        }
      ])
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  likePost: function (req, res) {
    db.Post.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          likes: req.body.userId
        }
      },
      { new: true }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
