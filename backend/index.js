require('dotenv').config()
const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL).then(()=>console.log('mongodb connncetd'))
.catch(err=>console.log(err))

const contactSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true},
    date:{type:Date, default:Date.now}
})

const contactDetails=mongoose.model("Contact",contactSchema)


app.post("/contactdetails",async(req,res)=>{
    const {name,email,message}=req.body
    console.log(name,email,message)
    if(!name||!email||!message){
        return res.status(400).json({message:"All Fields are Required"})
    }
    try{
        const contact= new contactDetails({name,email,message})
        await contact.save()
        return res.status(201).json({message:"Message sent successfully"})

    }catch(error){
        res.status(500).json({message:"server error", error})
    }

})


app.listen(process.env.PORT,()=>console.log(`server running at ${process.env.PORT}`))