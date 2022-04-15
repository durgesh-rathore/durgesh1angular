const express=require('express');
const router=express.Router();

const cartController=require('../controller/cart.controller');
router.post("/addtocart",cartController.addToCart);
router.post("/viewcart",cartController.viewCart);
module.exports=router;