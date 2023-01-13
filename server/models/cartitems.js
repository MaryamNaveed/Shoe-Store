const mongoose=require('mongoose');

const CartItems=new mongoose.Schema(
    {
        // has_paid_ticket:{type:Boolean, required:true},
        quantity:{type:Number, required:true},
        customer:{
            type:mongoose.Types.ObjectId,
            ref:'Customer'
        },
        
        product:{
            type:mongoose.Types.ObjectId,
            ref:'Product'
        },
    },
    {collection:'cartitems'}
)

const model=mongoose.model('CartItems',CartItems);
module.exports=model;