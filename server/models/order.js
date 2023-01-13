const mongoose=require('mongoose');

const Orders=new mongoose.Schema(
    {
        subtotal:{type:Number, required:true},
        taxes:{type:Number, required:true},
        customer:{
            type:mongoose.Types.ObjectId,
            ref:'Customer'
        },
        
        orderitems: [{
            type:mongoose.Types.ObjectId,
            ref:'OrderItems'
        }],
    },
    {collection:'orders'}
)

const model=mongoose.model('Orders',Orders);
module.exports=model;