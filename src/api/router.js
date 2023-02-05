

const express = require('express');
const mongoose = require('./db.js');
const UserModel = require('./models');
const router= express.Router()



router.post('/register' ,(req, res) => {
    const user = new UserModel({
        firstname: req.body.firstname,
        email: req.body.email,
        password: req.body.password,
        "result": "{ID}"
    })

    user.save().then(() => {
        res.status(201).send('you are register successfuly')
        console.log(user)
        
    })
        .catch((error) => {
            console.log(error)
            res.status(401).send('invalied')

        })
    })
    router.get('/login', (req, res) => {
  UserModel.findOne({
            email: req.body.email,
            password: req.body.password
        }).then(() => {
            res.status(201).send('you are login successfuly')
            
        })
            .catch((error) => {
                console.log(error)
                res.status(401).send('invalied')
    
            })
    })
module.exports=router