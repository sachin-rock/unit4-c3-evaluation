const mongoose=require("mongoose")

const publicationSchema= new mongoose.Schema({
    body:{type:"string",required:false}
},{

    versionKey:false,
    timestamps:true
    
})
module.exports=mongoose.model("publication",publicationSchema)