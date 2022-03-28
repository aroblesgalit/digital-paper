const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
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
  likes: {
    type: Number,
    default: 0
  },
  comments: [
    {
      comment: {
        type: String,
        trim: true,
        required: true
      },
      commenter: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    }
  ],
  public: {
    type: Boolean
  }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
