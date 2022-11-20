const {Router} = require('express');
const userController = require('../contollers/user-controller')
const {body} = require('express-validator')

const router = new Router()

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activete/:link', userController.activate)
router.get('/refresh', userController.refresh)
router.get('/users', userController.getUsers)

module.exports = router
