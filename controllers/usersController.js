const db = require('../models')

module.exports = {
  registerUser: function (req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password
    })
      .then(dbUser =>
        res.json({
          id: dbUser._id,
          username: dbUser.username
        })
      )
      .catch(err => res.status(401).json(err))
  },
  loginUser: function (req, res) {
    res.json({
      id: req.user._id,
      username: req.user.username,
      image: req.user.image,
      firstName: req.user.firstName,
      lastName: req.user.lastName
    })
  },
  logoutUser: function (req, res) {
    req.logout()
    req.session.destroy(function (err) {
      res.json({})
    })
  },
  fetchAuthUser: function (req, res) {
    if (!req.user) {
      res.status(401).json({})
    } else {
      res.json({
        id: req.user.id,
        username: req.user.username
      })
    }
  },
  updateUser: function (req, res) {
    db.User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
