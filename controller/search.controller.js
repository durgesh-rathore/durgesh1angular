
const Product = require('../model/product.model');

exports.searchProduct=(request,response)=>{
        // const errors=validationResult(request);
       var regex=new RegExp(request.body.sname,'i');
        Product.find({productName:regex}).populate('categoryId').then(result=>{
            console.log(result)
         return response.status(200).json(result);
        }).catch(err=>{
            return response.status(403).json(err);
        })
   
}