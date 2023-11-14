
const express = require('express');
const router = express.Router();
const Employee = require('../models/employee'); 



//config upload file
const multer = require('multer');
let filename = '';

const myStorage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, redirect) => {
        let fl = Date.now() + '.' + file.mimetype.split('/')[1];
        filename = fl;
        redirect(null, fl);
    }
});
const upload = multer({ storage: myStorage });
//end of upload file config


router.post('/ajout',upload.any('image'),(req,res)=>{
    let data=req.body
    let emp=new Employee(data)
    emp.image=filename

    emp.save()

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



router.get('/all', (req, res) => {
  Employee.aggregate([
    {
      $lookup: {
        from: 'departements', 
        localField: 'idDep',
        foreignField: '_id',
        as: 'dep',
      },
    },
  ])
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});


router.get('/getbyid/:id', (req,res)=>{
    let myid=req.params.id
    let data=req.body
    Employee.findById({_id:myid})
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

}),
router.put('/update/:id',upload.any('image'), (req, res) => {
    let id = req.params.id;
    let newData = req.body;

    if(filename.length>0){
        newData.image=filename
    }
    Employee.findByIdAndUpdate({_id:id}, newData)

    .then(result => {
        res.status(200).send(result);
    })
    .catch(error => {
        console.log(error);
        res.status(400).send('Error');
    });
});

router.delete('/delete/:id', (req,res)=>{
    let id=req.params.id
    Employee.findByIdAndDelete({_id:id})
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