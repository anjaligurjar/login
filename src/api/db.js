const mongoose= require('mongoose')
const { aggregate } = require('./models')
mongoose.set('strictQuery',true)
module.exports=mongoose.connect('mongodb://127.0.0.1:27017/myapp',{
    ssl:false,
}
).then(()=>{
    console.log('mongoose is connected')
}).catch((error)=>{
    console.log("this is error",error)
})
