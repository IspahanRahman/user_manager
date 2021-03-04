const bcrypt = require('bcrypt')
const database=require('../config/database')
const User=require('../model/User')
// const session = require('express-session')

exports.signupGetController=(req,res)=>{
    res.render('register')
}

exports.signupPostController = async(req,res,next)=>{
    let{name,email,password}=req.body
try{
    let hashedPassword=await bcrypt.hash(password,11)
    let user=new User({
        name,
        email,
        password:hashedPassword
    })
    let createduser=  await user.save()
    console.log('User creadted success',createduser)
    res.redirect('/login')
}catch(e){
   console.log(e)
    next(e)
}

}

exports.loginGetController =(req,res)=>{
    res.render('login')
}


exports.loginPostController=async(req,res,next)=>{
    let{email,password}=req.body
    try{
        let user=await User.findOne({where:{email:email}})
        if(!user){
            console.log('error')
            res.send('<h3>Email is not valid<h3>')
            return res.redirect('/login',{message:'Email is not valid'})
        }
        let match= await bcrypt.compare(password,user.password)

        if(!match){
            res.send('<h3>fail,Please Provide Valid Credentials<h3>')
        }
        // req.session.isLoggedIn=true
        // req.session.user=user
        // req.session.save(err=>{
        //     if(err){
        //         console.log(err)
        //         return next(err)
        //     }
            
        // }) 
       return res.redirect('/')
    }catch(e){
        console.log(e)
        next(e)
    }

}

exports.logoutController =(req, res) => {
    req.session.destroy(err => {
        if(err){
        
            return next(err)
        }
        //req.flash('success','Successfully Logout')
        return res.redirect('/login')
    })
  }