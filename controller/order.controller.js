const Order = require('../model/order.model');
const {validationResult} = require('express-validator');
const port=process.env.PORT || 6000;
//==============================================

// const express=require('express');
// const cors=require('cors');
// const bodyParser=require('body-parser');
// const Razorpay=require('razorpay');
// const { response } = require('express');

// const app=express();
// app.use(cors());
// app.use(bodyParser.urlencoded({extended:true}));
// const instance=new Razorpay({
//     key_id: 'rzp_test_25KnYfoIcEzVyf',
//     key_secret:'OEB12eQtyhSe5uHGIy9967q9'
// })
// app.post('/order',(req,res)=>{
//     instance.orders.create({
//         amount:50000,
//         currency:'INR',
//         receipt:'receipt#1',
//         notes:{
//             key1:'value3',
//             key2:'value2'
//         }        }
//     ,(err,order)=>{
//         if(err)
//         console.log("err in order "+err);
//         else
//         console.log(order);
//         res.status(200).json(order);

// })

// })
// app.post('/order-status',(req,res)=>{
//     instance.payments.fetch(req.body.razorpay_payment_id).then(paymentdeatail=>{
//         console.log(paymentdeatail);
//         res.send('Your payment sucessfull');
//     })
// })
// app.listen(3000,(r)=>{
//     console.log('server is runing');
// })


// ===============================================

exports.orderPlace = (request,response)=>{
     console.log(request.body);
    // console.log(request.file);  
    const errors = validationResult(request);
    if(!errors.isEmpty())
      return response.status(400).json({errors: errors.array()});
    
    Order.create({
      
      userId:request.body.userId,
      address:request.body.address,
      city:request.body.city,
      mobile:request.body.mobile,
      productId: request.body.productId
    })
    .then(result=>{
        return response.status(201).json(result);
    })
    .catch(err=>{
        return response.status(403).json({message: "Oops! Something went wrong.."});
    });  
}


// this is the code redendency problem
// exports.orderPlace=(request,response)=>{
//     console.log(request.file);  
//         const errors = validationResult(request);
//         if(!errors.isEmpty())
//           return response.status(400).json({errors: errors.array()});   
//           let order=new Order();
//           order.mobile=request.body.mobile;
//           order.address=request.body.address;
//           order.userId=request.body.userId;
//           order.city=request.body.city;
//           console.log(request.body.productId);
//         //   order.productId.push(request.body.productId);
//         order.productId=request.body.productId
//           order.save().populate('products').then(result=>{
//                     return response.status(201).json(result);
//                 })
//                 .catch(err=>{
//                     console.log(err);
//                     return response.status(403).json({message: "Oops! Something went wrong.."});
//                 });
// }