require("dotenv").config()
const express=require('express')
const database=require('./config/database')
const User=require('./model/User')
const router=require('./routes/route')
// const setMiddleware=require('./middleware/middleware')
const app=express()

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
// setMiddleware(app)

app.use('/',router)
app.get('/',(req,res)=>{
    res.render('index')
})

database.authenticate()
.then(()=>{
    app.listen(process.env.APP_PORT,()=>{
        console.log(`Server connected to Port ${process.env.APP_PORT}`)
    })
}).catch((e)=>{
    console.log(e)
})