const express = require('express');
const router = express.Router();

const Product = require('../model/product');

//see the all product
router.get('/products', (req,res,next)=>{
    // res.send("retriving employees list..!");

    Product.find(function(err, data){
        if (err) console.log("error in getting the products ", err);
        res.json(data);
    });
});
//add product
router.post('/product', (req, res, next)=>{
    let newProduct = new Product({
  name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
    });

newProduct.save((err, data)=>{
    console.log("product  in routes save", data);
    if (err) {
        res.json({msg : "failed to add employee ", data});
    }else{
        // res.json({msg : "employee added successfully....!", addedProduct : empl});
       res.json(data); 
    }

});
});
router.delete('/product/:id',(req, res, next)=>{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
     
    Product.remove({ _id: req.params.id }, function (err, dlt) {
    if (err) {
      res.json(err);
    } else {
      res.json(dlt);
    }
  });
});


// update product
router.put("/product/:id", (req, res, next) => {
  console.log("req", req.body);

  Product.findOne({ _id: req.params.id }, function (err, updt) {
    if (err) {
      res.json(err);
    } else { 
      updt.name = req.body.name;
      updt.email = req.body.email;
      updt.contact = req.body.contact;

      updt.save((err, data) => {
        console.log("findOne->save(): product : ", data);
        if (err) {
          res.json({ msg: "Failed to update Product" });
        } else {
          res.json(data);
        }
      });
      // res.json(data);
    }
  });
});


module.exports = router;