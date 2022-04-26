const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Post = require('./post')

const commentSchema = new Schema(
  {
    body: {
      type: String,
      trim: true,
      required: true
    },
    commenter: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
)

commentSchema.pre('deleteOne', { document: true, query: false }, function (
  next
) {
  // Delete comment from the Post doc comments array
  Post.updateOne(
    {
      comments: { $in: this._id }
    },
    {
      $pull: { comments: this._id }
    },
    function (err, res) {
      if (err) return next(err)
      next()
    }
  )
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment
