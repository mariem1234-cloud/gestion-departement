const express=require('express');
const Admin=require('../models/admin')

const router=express.Router();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

router.post('/register', (req,res)=>{
let data=req.body
let admin=new Admin(data)

let salt=bcrypt.genSaltSync(10)
let cryptedPass=bcrypt.hashSync(data.password, salt)

admin.password=cryptedPass

admin.save()
.then(
    (result)=>{
        res.status(200).send(result)
    }
)
.catch(
    (error)=>{
        res.status(400).send(error)
    }
)
});


router.post('/login', (req,res)=>{
    let adminData=req.body

    Admin.findOne({email: adminData.email})
    .then(
        (result)=>{
            if(!result){
                res.send('email or password invalid')
            }else{
                let validPassword=bcrypt.compareSync(adminData.password , result.password);
                if(!validPassword){
                    res.send('email or password invalid')
                }else{

                    let payload={
                        _id:result._id,
                        fullname:result.fullname,
                        email:result.email
                    }

                    let token=jwt.sign(payload, '123456789')
                    res.send({mytoken:token})

                }

            }
        }
    )

    .catch(
        (error)=>{
            res.status(400).send(error)
        }
    )

})






module.exports=router;