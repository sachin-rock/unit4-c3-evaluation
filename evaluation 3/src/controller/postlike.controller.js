const express=require("express")
const router=express.Router()

const Postlike=require("../model/postlike.model")

router.get("",async (req,res)=>{
    try {
        const postlike=await Postlike.find().lean().exec()
        return res.send(postlike)


    } catch (err) {
        return res.send(err.message)
    }
})

router.delete("/:id",async (req,res)=>{
    try {
        const postlike=await User.findByIdAndDelete(req.body.id).lean().exec()
        return res.send(post)


    } catch (err) {
        return res.send(err.message)
    }
})

