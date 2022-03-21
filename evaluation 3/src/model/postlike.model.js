const mongoose=require("mongoose")

const postlikeSchema=new mongoose.Schema({
    like:{type:"string",required:true},
   unlike:{type:"string",required:true}
    
},{

    versionKey:false,
    timestamps:true
    
})
module.exports=mongoose.model("postlike",postlike)