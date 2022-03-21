const mongoose=require("mongoose")

const usertSchema=new mongoose.Schema({
    fisrtName:{type:"string",required:true},
    lastName:{type:"string",required:false},
    age:{type:"Number",required:true},
    email:{type:"string",required:true,Unique:true}
},{

    versionKey:false,
    timestamps:true
    
})
module.exports=mongoose.model("user",userSchema)