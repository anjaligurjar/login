

const express = require('express');
const mongoose = require('./db.js');
const UserModel = require('./models');
const router= express.Router()



router.post('/branddaily' ,(req, res) => {
    const user = new UserModel({
        
        brand: req.body.brand,
        TransactionType:req.body.TransactionType,
        TotalOrderValue: req.body.TotalOrderValue,
        TotalOrders: req.body.TotalOrders,
        grossMarginPercentage:req.body.grossMarginPercentage

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
    router.get('/brand', (req, res) => {
  UserModel.findOne({
            brand: req.body.brand,
            $set:new Date()
        }).then(() => {
            res.status(201).json({id:req.id}
            )
            
        })
            .catch((error) => {
                console.log(error)
                res.status(401).send('invalied')
    
            })
    })
module.exports=router