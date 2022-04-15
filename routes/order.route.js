const express=require('express');
const router=express.Router();
// const tokenAuth=require('../midellwere/token.verification')

const orderController=require('../controller/order.controller');
router.post("/orderplace",orderController.orderPlace);
module.exports=router;