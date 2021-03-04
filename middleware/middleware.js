const express=require('express')
const morgan=require('morgan')
const session=require('express-session')
const config=require('config')
// const{bindUserWithRequest}=require('./authMiddleware')
const setLocals=require('./setLocals')


const middleware=[
    morgan('dev'),
    express.static('public'),
    express.urlencoded({extended:true}),
    express.json(),
    session({
        secret:'secret_key',
        resave:false,
        saveUninitialized:false,
    }),
   bindUserWithRequest(),
   setLocals()
  
]
module.exports=app=>{
    middleware.forEach(m=>{
        app.use(m)
    })
}