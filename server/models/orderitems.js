const mongoose=require('mongoose');

const OrderItems=new mongoose.Schema(
    {
        // has_paid_ticket:{type:Boolean, required:true},
        quantity:{type:Number, required:true},
        
        
        product:{
            type:mongoose.Types.ObjectId,
            ref:'Product'
        },
    },
    {collection:'orderitems'}
)

const model=mongoose.model('OrderItems',OrderItems);
module.exports=model;