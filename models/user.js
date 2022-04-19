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
  // Delete all the post and comment docs that reference the deleted user
  this.model('Post').deleteMany({ author: this._id }, next)
  this.model('Comment').deleteMany({ commenter: this._id }, next)
})

userSchema.methods.validatePassword = async function validatePassword (data) {
  return bcrypt.compare(data, this.password)
}

const User = mongoose.model('User', userSchema)

module.exports = User
