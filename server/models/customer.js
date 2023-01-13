const mongoose=require('mongoose');

const Customer=new mongoose.Schema(
    {
        name:{type:String, required:true},
        email:{type:String, required:true, unique:true},
        password:{type:String, required:true}
    },
    {collection:'customers'}
)

const model=mongoose.model('Customer',Customer);
module.exports=model;