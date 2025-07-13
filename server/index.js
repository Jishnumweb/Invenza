const express = require('express')
const dbConnect = require('./config/dbConnection')
const userRoutes = require('./routes/userRoutes')
const app = express()
require('dotenv').config()

// Db connection 
dbConnect()

// Application middleware
app.use(express.json())

app.get("/",(req,res)=>{
    res.json("server hitted")
})

// routes
app.use("/user",userRoutes)



app.listen(process.env.PORT,()=>{
    console.log(`server starts on port ${process.env.PORT}`);
})







