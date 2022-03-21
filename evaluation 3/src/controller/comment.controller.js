const express = require("express")

const router=express.Router()

const Comment = require ("../model/comment.model")


router.get("",async (req,res)=>{
    try {
        const comment=await Comment.find().lean().exec()
        return res.send(comment)


    } catch (err) {
        return res.send(err.message)
    }
})


router.post("",async (req,res)=>{
    try {
        const comment=await Comment.create(req.body)
        return res.send(comment)


    } catch (err) {
        return res.send(err.message)
    }
})
module.exports=router