const mongoose = require('mongoose')
const Schema = mongoose.Schema

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

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment
