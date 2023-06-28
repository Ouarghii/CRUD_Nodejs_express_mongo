const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const routes=require('./routes/routes')
const app=express()

dotenv.config()
const mongoString=process.env.DATABASE_URL


app.use(express.json())
app.listen(3000,()=>{
    console.log(`Sever running at port : ${3000}`)
})
mongoose.connect(mongoString)
const database=mongoose.connection
database.on('error',(error)=>{
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})
app.use('/api',routes)