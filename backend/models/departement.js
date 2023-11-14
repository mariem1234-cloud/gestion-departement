const mongoose=require('mongoose');
const Departement=mongoose.model('Departement', {
 
    name:{
        type:String
    },

    description:{
        type:String
    },

    etage:{
        type:Number
    },

    salle:{
        type:Number
    }


})
module.exports=Departement
