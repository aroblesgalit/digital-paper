const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10
const Post = require('./post')
const Comment = require('./comment')

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    trim: true
  }
})

userSchema.pre('save', async function save (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) {
    return next()
  }
  try {
    // Generate salt
    const salt = await bcrypt.genSalt(saltRounds)
    // Hash the password along with the new salt
    this.password = await bcrypt.hash(this.password, salt)
    return next()
  } catch (err) {
    return next(err)
  }
})

userSchema.pre('deleteOne', { document: true, query: false }, async function (
  next
) {
  try {
    // First, delete user's comments and likes from all posts' comments and likes array
    // Fix error => this currently pulls all comments and not just user's comments
    const userComments = await Comment.find({ author: this._id })
    userComments.forEach(comment => {
      Post.updateMany(
        { comments: { $in: comment._id } },
        { $pull: { comments: comment._id } },
        function (err, res) {
          if (err) return next(err)
          next()
        }
      )
    })
    this.model('Post').updateMany(
      { likes: { $in: this._id } },
      { $pull: { likes: this._id } },
      function (err, result) {
        if (err) return next(err)
        next()
      }
    )
    // Second, delete all comment docs from user's posts
    // Fix error => this did not delete comment docs, but doesn't always
    const userPosts = await Post.find({ author: this._id })
    userPosts.forEach(post => {
      Comment.deleteMany({ _id: { $in: post.comments } }, function (
        err,
        result
      ) {
        if (err) return next(err)
        next()
      })
    })
    // Third, delete all the posts and comments that reference the deleted user
    this.model('Post').deleteMany({ author: this._id }, function (err, result) {
      if (err) return next(err)
      // db.Comment.deleteMany({ _id: { $in: result.comments } })
      next()
    })
    this.model('Comment').deleteMany({ commenter: this._id }, next)
  } catch (err) {
    next(err)
  }
})

userSchema.methods.validatePassword = async function validatePassword (data) {
  return bcrypt.compare(data, this.password)
}

const User = mongoose.model('User', userSchema)

module.exports = User
