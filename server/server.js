const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const PORT = 8080;
const app = express()



app.use(express.json())
app.use(cors())

mongoose.set('strictQuery',false)
mongoose.connect("mongodb+srv://Kenan:Z0kcRFiKEoxSfprt@cluster.yah8f3d.mongodb.net/?retryWrites=true&w=majority").then(()=> console.log('Conncted to DataBase')).catch((err)=> console.error(err))


const UserSchema = new mongoose.Schema({
    img:String,
    name:String,
    price:Number

})

const UserModel = mongoose.model("User",UserSchema)


app.get('/api/prod',(req,res)=>{
    UserModel.find({},(error,data)=>{
        if(error) return res.status(500).send({error})
        res.send(data)
    })
})

app.get('/api/prod/:id',(req,res)=>{
    UserModel.findById({_id:req.params.id},(error,data)=>{
        if(error) return res.status(500).send({error})
        res.send(data)
    })
})

app.post("/api/prod",(req,res)=>{
    const newUser = new UserModel({
        ...req.body
    })
    newUser
    .save()
    .then(()=> res.send({message:'Sended Product',newUser}))
    .catch((err)=> res.status(500).send({err}))
})

app.delete("/api/prod/:id",(req,res)=>{
    UserModel.findByIdAndDelete({_id:req.params.id},(error,data)=>{
        if(error) return res.status(500).send({error})
        res.send(data)
    })
})

app.listen(PORT,()=>{
    console.log('Running on',PORT);
})