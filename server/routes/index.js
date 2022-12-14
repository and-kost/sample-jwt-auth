const {Router} = require('express');
const userController = require('./api/user/user-controller')
const {body} = require('express-validator')
const authMiddleware = require('../utils/middlewares/auth-middelware')

const router = new Router()

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUsers)

module.exports = router
