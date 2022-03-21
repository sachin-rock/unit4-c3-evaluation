const mongoose=require("mongoose")

const commentSchema=new mongoose.Schema({
    body:{type:"string",required:false}
},{

    versionKey:false,
    timestamps:true
    
})
module.exports=mongoose.model("comment",commentSchema)