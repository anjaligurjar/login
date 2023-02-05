const mongoose= require('mongoose')
const UserSchema= new mongoose.Schema({
    Email:{

        type:String
    },
    Name:{
        type:String
    },
    Password:{

        type:String
    },
    id:{
        type:String
    }
    
})
module.exports=mongoose.model('User',UserSchema)