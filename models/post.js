const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema(
  {
    category: {
      type: String,
      trim: true,
      required: true
    },
    title: {
      type: String,
      trim: true,
      required: true
    },
    body: {
      type: String,
      trim: true,
      required: true
    },
    image: {
      type: String
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ],
    isPublic: {
      type: Boolean
    }
  },
  { timestamps: true }
)

postSchema.pre('deleteOne', { document: true, query: false }, function (next) {
  this.model('Comment').deleteMany({ _id: { $in: this.comments } }, next)
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
