const { response } = require('express');
const Razorpay=require('razorpay');
const Order = require('../model/order.model');
// const {validationResult} = require('express-validator');
//  const port=process.env.PORT || 3000;



const instance=new Razorpay({
  key_id: 'rzp_test_25KnYfoIcEzVyf',
  key_secret:'OEB12eQtyhSe5uHGIy9967q9'
})
exports.createOrder=(req,res)=>{
  // console.log(req.body)

  instance.orders.create({
      amount:req.body.amount,
      currency:'INR',
      receipt:'receipt#1',
      notes:{
          key1:'value3',
          key2:'value2'
      }        }
  ,(err,order)=>{
      if(err)
      console.log("err in order "+err);
      else
      console.log(order);
      res.status(200).json(order);

  })
}


exports.orderStatus=(req,res)=>{
  instance.payments.fetch(req.body.razorpay_payment_id).then(paymentdeatail=>{
      console.log(paymentdeatail);
      console.log("product ID"+paymentdeatail.notes.productId);
      console.log("paymentId"+paymentdeatail.id);
      console.log("address"+paymentdeatail.notes.address);
      console.log("userId"+paymentdeatail.notes.userId);
      console.log("order_id"+paymentdeatail.order_id);
      console.log("amount"+paymentdeatail.amount);
      console.log("contact"+paymentdeatail.contact);
      console.log("email"+paymentdeatail.email);
      console.log("payment transaction_id"+paymentdeatail.acquirer_data.bank_transaction_id);

     Order.create({
             address:paymentdeatail.notes.address,
             userId:paymentdeatail.notes.userId,
             mobile:paymentdeatail.contact,
             paymentId:paymentdeatail.id,
             orderId:paymentdeatail.order_id,
             amount:paymentdeatail.amount,

             productId: paymentdeatail.notes.productId})
              .then((result)=>{

                return response.status(200).json(result)

              })
             .catch((err)=>{
               console.log("err catch block"+err);
               return response.status(404).json(err);
             });
        })
}

 exports.orderHistory=(request,response)=>{
   Order.find().then(result=>{
    return response.status(200).json(result) 
  })
  .catch(err=>{
    return response.status(500).json(err)
  })
  }

