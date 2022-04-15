const Order = require('../model/order.model');
const {validationResult} = require('express-validator');
const port=process.env.PORT || 6000;


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