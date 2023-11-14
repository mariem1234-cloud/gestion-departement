const express=require('express');

const Departement=require('../models/departement')

const router=express.Router()




router.post('/ajout', (req, res) => {
    let data = req.body;
    let dep = new Departement(data);

    dep.save()
    .then(
        (result) => {
        filename = ''; 
        res.status(200).send(result);
    })
    .catch(
        (error) => {
        console.log(error);
        res.status(400).send(error);
    });
});

router.get('/all', (req,res)=>{
    Departement.find()
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
})


router.get('/getbyid/:id', (req,res)=>{
    let id=req.params.id
    Departement.findById({_id:id})
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
})


    router.put('/update/:id', (req, res) => {
        let myid = req.params.id;
        let newData = req.body;
        Departement.findByIdAndUpdate({_id: myid}, newData)

    
        .then(
            (result) => {
            res.status(200).send(result);
        })
        .catch(
            (error) => {
            console.log(error);
            res.status(400).send('Error');
        });
    });

router.delete('/delete/:id', (req,res)=>{
    let id=req.params.id
    Departement.findByIdAndDelete({_id:id})
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
})



module.exports=router