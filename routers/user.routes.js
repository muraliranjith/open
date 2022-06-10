const userController=require('../controllers/user.controller')

const router = require('express').Router()

// use routers
router.post('/', userController.addUser)



module.exports = router;