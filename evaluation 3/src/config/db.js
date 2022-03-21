const mongoose = require("mongoose")

function connect (){
    return mongoose.connect(" mongodb+srv://Sachin:Sachin@cluster0.cugin.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

module.exports=connect