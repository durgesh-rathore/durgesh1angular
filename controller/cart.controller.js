const Cart = require('../model/cart.model');
const { validationResult } = require('express-validator');
const cartModel = require('../model/cart.model');
// const res = require('express/lib/response');
exports.addToCart = async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty())
    
       return response.status(401).json({ err: errors.array() });

    let cart=await Cart.findOne({userId:request.body.userId})
    if(!cart){
        cart =new Cart();
        cart.userId=request.body.userId;
    }
    cart.productId.push(request.body.productId);
    cart.save().then(result=>{
        console.log(result);
        return response.status(201).json(result)
    }).catch(err=>{
        console.log(err);
        return response.status(401).json(err);
    });
}





//         let cart=new Cart();
//         cart
//     Cart.create({ userId: request.body.userId, productId: request.body.productId }).then(result => {
//         return response.status(202).json(result);
//     }).catch(err => {
//         return response.status(401).json(err);
//     })
// }
exports.removeFromCart = (request, response) => {
    const error = validationResult(request);
    if (error.isEmpty())
        return response.status(401).json({ err: error.array() });
    Cart.deleteOne({userId:request.body.userId,productId:request.body.productId}).then((result)=>{
        console.log("delete Succeful");
        return response.status(201).json(result);
    }).catch(err=>{
            console.log("faild to remove item from your card");
            return response.status(401).json(err);
    });
}