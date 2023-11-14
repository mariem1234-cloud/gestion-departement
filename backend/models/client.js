const mongoose=require('mongoose');

const Client=mongoose.model('Client', {


    name:{
        type:String
    },

    description:{
        type:String
    },

    entreprise:{
        type:String
    },

    titreproject:{
        type:String
    },

    image:{
        type:String
    }


})

module.exports=Client