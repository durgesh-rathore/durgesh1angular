const express=require('express');
const router=express.Router();
const tokenAuth=require('../midellwere/token.verification')

const cartController=require('../controller/cart.controller');
router.post("/addtocart",tokenAuth.tokenauthotication,cartController.addToCart);
router.post("/viewcart",tokenAuth.tokenauthotication,cartController.viewCart);
router.post("/removefromcart",tokenAuth.tokenauthotication,cartController.removeFromCart);
module.exports=router;