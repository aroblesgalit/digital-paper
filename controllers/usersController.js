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
      username: req.user.username
    })
  }
}
