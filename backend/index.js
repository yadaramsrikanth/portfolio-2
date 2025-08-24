require('dotenv').config()
const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const nodemailer=require("nodemailer")
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

const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
})



app.post("/contactdetails",async(req,res)=>{
    const {name,email,message}=req.body
    console.log(name,email,message)
    if(!name||!email||!message){
        return res.status(400).json({message:"All Fields are Required"})
    }
    try{
        const contact= new contactDetails({name,email,message})
        await contact.save()

        const mailOptions={
            from:process.env.EMAIL_USER,
            to:process.env.TO_EMAIL,
            subject:"New Contact Form Submission",
            text:`You have new message from ${name} (${email}):\n\n ${message}`
        }

        await transporter.sendMail(mailOptions)
        return res.status(201).json({message:"Message sent successfully"})

    }catch(error){
        res.status(500).json({message:"server error", error})
    }

})


app.listen(process.env.PORT,()=>console.log(`server running at ${process.env.PORT}`))