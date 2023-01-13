const mongoose=require('mongoose');

const Product=new mongoose.Schema(
    {
        name:{type:String, required:true, unique:true},
        price:{type:Number, required:true},
        quantity:{type:Number, required:true},
        description:{type:String, required:true},
        image:{type:String, required:true}
    },
    {collection:'products'}
)

const model=mongoose.model('Product',Product);
module.exports=model;