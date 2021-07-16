const router = require('express').Router()
const authController = require('../controllers/auth.controller')
const authMiddleware = require('../middleware/auth.middleware')

router.post('/register', authController.register)
router.post('/activation', authController.activateEmail)
router.post('/login', authController.login)
router.post('/forgot', authController.forgotPassword)
router.post('/reset', authMiddleware, authController.resetPassword)
router.post('/logout', authController.logout)
router.post('/refresh_token', authController.generateAccessToken)


module.exports = router