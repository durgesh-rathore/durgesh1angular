const Product = require('../model/product.model');
const {validationResult} = require('express-validator');
const port=process.env.PORT || 6000;


exports.add = (request,response)=>{
    // console.log(request.body);
    // console.log(request.file);  
    const errors = validationResult(request);
    if(!errors.isEmpty())
      return response.status(400).json({errors: errors.array()});
    
    Product.create({
      productName: request.body.productName,
       productImageUrl:"https://firebasestorage.googleapis.com/v0/b/secondpro-c0514.appspot.com/o/"+request.file.filename+"?alt=media&token=durgeshrathore",
       productQty:request.body.productQty,
        productPrice:request.body.productPrice,
        productDescription:request.body.productDescription,
        productDiscount:request.body.productDiscount,
        categoryId:request.body.categoryId
      
    })
    .then(result=>{
        return response.status(201).json(result);
    })
    .catch(err=>{
        return response.status(403).json({message: "Oops! Something went wrong.."});
    });  
}

exports.getproduct=(request,response)=>{
     const errors=validationResult(request);
     if(!errors.isEmpty())
        return response.status(403).json({err:errors.array()});
     Product.find().populate('categoryId').then(result=>{
         console.log(result)
      return response.status(200).json(result);
     }).catch(err=>{
         return response.status(403).json(err);
     })
} 