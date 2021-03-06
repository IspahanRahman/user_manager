const Sequelize=require('sequelize')

const DB_NAME=process.env.DB_NAME
const DB_PASSWORD=process.env.DB_PASSWORD
const DB_USERNAME=process.env.DB_USER
const DB_HOST=process.env.DB_HOST
const sequelize=new Sequelize(DB_NAME,DB_USERNAME,DB_PASSWORD,{
    host:DB_HOST,
    dialect:'mysql'
})

module.exports=sequelize