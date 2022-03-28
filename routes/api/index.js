const router = require('express').Router()
const userRoutes = require('./user')
const postRoutes = require('./post')

router.use('/user', userRoutes)
router.use('/posts', postRoutes)

module.exports = router
