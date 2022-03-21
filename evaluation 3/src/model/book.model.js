const mongoose=require("mongoose")

const bookSchema=new mongoose.Schema({
    likes:{type:"string",required:true},
    coverimage:{type:"string",required:false},
    content:{type:"string",required:true}
},{

    versionKey:false,
    timestamps:true
    
})
module.exports=mongoose.model("book",bookSchema)