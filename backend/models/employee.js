const mongoose=require('mongoose');
const ObjectId=require('mongodb').ObjectId;
const Employee=mongoose.model('Employee', {

    name:{
        type:String
    },
    lastname:{
        type:String
    },
    image:{
        type:String
    },
    tel:{
        type:String
    },
    email:{
        type:String
    },
    address:{
        type:String
    },
    idDep:{
        type:ObjectId
    }

})


module.exports=Employee