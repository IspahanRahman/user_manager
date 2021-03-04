const router=require('express').Router()

// const signupValidator=require('../authValidator/signupValidator')
// const loginValidator=require('../authValidator/loginvalidator')
// const{isUnAuthenticated}=require('../middleware/authMiddleware')

const {
    signupGetController,
    signupPostController,
    loginGetController,
    loginPostController,
    logoutController

}=require('../controller/authController')


router.get('/register',signupGetController) 
  router.post('/register',signupPostController) 

  router.get('/login',loginGetController) 
  router.post('/login',loginPostController)

  router.get('/logout',logoutController) 

module.exports=router