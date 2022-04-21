const express=require('express');
const router=express.Router();
const tokenAuth=require('../midellwere/token.verification')

const cartController=require('../controller/cart.controller');
router.post("/addtocart",tokenAuth.tokenauthotication,cartController.addToCart);
// router.post("/viewcart",tokenAuth.tokenauthotication,cartController.viewCart);
router.post("/viewcart",cartController.viewCart);
router.post("/removefromcart",tokenAuth.tokenauthotication,cartController.removeFromCart);
module.exports=router;


// for cart add and remove button in angular what want to do by me 
//   first we have data of user from cart which add in cart
//  then if data is match so give 
//  else part we are remove from cart button 

// we fixed how many product want to show user 
// we are printing product dynamically  so therefore we check each 
// 2. 
// ngFor let product of product 
// apply one product then i am going to work