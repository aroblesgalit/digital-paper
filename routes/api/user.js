const passport = require('../../config/passport')
const router = require('express').Router()
const usersController = require('../../controllers/usersController')

router.post('/login', passport.authenticate('local'), usersController.loginUser)

router.post('/register', usersController.registerUser)

router.get('/logout', usersController.logoutUser)

router.get('/authenticated', usersController.fetchAuthUser)

// Match with '/api/user/:id'
router.route('/:id').patch(usersController.updateUser)

module.exports = router
