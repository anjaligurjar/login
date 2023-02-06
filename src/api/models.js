const mongoose= require('mongoose')
const brand_sales_daily= new mongoose.Schema({
    id:{
        type:String
    },
    date:{
        type:Date
    },
    brand:{

        type:String,
        required:true
    },
    TransactionType:{
        
            type:String
        
    },
    TotalOrders:{
        type:Number

    },
    TotalOrderValue:{
        type:Number

    },
    
    grossMarginPercentage:{
        type:String
    },
    cuurentdate:{ 
    createdAt: Date,
	updatedAt:  Date,
   
},
 db
	


})
module.exports=mongoose.model('User',brand_sales_daily)