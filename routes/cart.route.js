const express=require('express');
const router=express.Router();

const cartController=require('../controller/cart.controller');
router.post("/addtocart",cartController.addToCart);
module.exports=router;