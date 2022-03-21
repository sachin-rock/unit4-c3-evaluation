const express =require ("express")

const mongoosec =require("mongoose")

const connect=require("../src/config/db")

const app=express()

app.use(express.json())


const usercontroller=require("../src/controller/user.controller")

const postlikecontroller=require("../src/controller/postlike.controller")

const commentcontroller=require("../src/controller/comment.controller")

const publicationcontroller=require("../src/controller/publication.controller")

const bookcontroller=require("../src/controllerbook.controller")


app.use("/user",usercontroller)
app.use("/postlike",postlikecontroller)
app.use("/comment",commentcontroller)
app.use("/publication",publicationcontroller)
app.use("/book",bookcontroller)

app.listen(4000,async()=>{
    await connect()
    console.log("post running on 4000")
})