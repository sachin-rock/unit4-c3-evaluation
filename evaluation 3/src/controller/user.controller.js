const express =require ("express")

const router=express.Router()

const User=require("../model/user.model")

router.get("",async (req,res)=>{
    try {
        const user=await User.find().lean().exec()
        return res.send(user)


    } catch (err) {
        return res.send(err.message)
    }
})

router.post("",async (req,res)=>{
    try {
        const user=await User.create(req.res)
        return res.send(user)


    } catch (err) {
        return res.send(err.message)
    }
})

router.patch("/:id",async (req,res)=>{
    try {
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.send(user)


    } catch (err) {
        return res.send(err.message)
    }
})

router.delete("",async (req,res)=>{
    try {
        const user=await User.UserfindByIdAndUpdate(req.params.id).lean().exec()
        return res.send(user)


    } catch (err) {
        return res.send(err.message)
    }
})

module.exports=router