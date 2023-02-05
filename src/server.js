const express = require('express');

const UserRouter=require('./api/router.js')
const app =express();
const PORT=process.env.PORT || 3000


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(UserRouter)


app.listen(PORT,()=>{
    console.log(`server is connected, ${PORT}`)
})

