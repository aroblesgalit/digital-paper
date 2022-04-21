const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10

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

userSchema.pre('deleteOne', { document: true, query: false }, function (next) {
  // First, delete user's comments from all posts' comments array
  // Second, delete all comment docs from user's posts
  // Third, delete all the posts and comments that reference the deleted user

  this.model('Post').deleteMany({ author: this._id }, next)
  const commentsByUser = this.model('Comments').findAll({
    commenter: { $in: [this.id] }
  })
  // this.model('Post').updateMany(
  //   { comments: { $in: [this._id] } },
  //   { $pullAll: { comments: this._id } },
  //   next
  // )
  console.log(commentsByUser)
  this.model('Comment').deleteMany({ commenter: this._id }, next)
})

userSchema.methods.validatePassword = async function validatePassword (data) {
  return bcrypt.compare(data, this.password)
}

const User = mongoose.model('User', userSchema)

module.exports = User
