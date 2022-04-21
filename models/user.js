const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10
const db = require('./index')

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
    // Find all user's comments
    const allComments = await this.model('Comment').findAll({
      commenter: this._id
    })
    console.log(allComments)
    // First, delete user's comments from all posts' comments array
    // allComments.then(comment => {
    //   await this.model('Post').updateMany(
    //     { comments: { $in: comment._id} },
    //     {
    //       $pullAll: {
    //         comments: comment._id
    //       }
    //     }
    //   )
    // })

    // Second, delete all comment docs from user's posts
    // Third, delete all the posts and comments that reference the deleted user

    // this.model('Post').deleteMany({ author: this._id }, next)
    // const commentsByUser = this.model('Comments').findAll({
    //   commenter: { $in: [this._id] }
    // })
    // this.model('Post').updateMany(
    //   { comments: { $in: [this._id] } },
    //   { $pullAll: { comments: this._id } },
    //   next
    // )
    // console.log(commentsByUser)
    // this.model('Comment').deleteMany({ commenter: this._id }, next)
  } catch (err) {
    next(err)
  }
})

userSchema.methods.validatePassword = async function validatePassword (data) {
  return bcrypt.compare(data, this.password)
}

const User = mongoose.model('User', userSchema)

module.exports = User
