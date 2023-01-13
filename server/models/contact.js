const mongoose=require('mongoose');

const Contact=new mongoose.Schema(
    {
        fullName:{type:String, required:true},
        email:{type:String, required:true},
        phone:{type:String, required:true},
        message:{type:String, required:true}
    },
    {collection:'contacts'}
)

const model=mongoose.model('Contact',Contact);
module.exports=model;