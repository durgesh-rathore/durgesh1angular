const Cart = require('../model/cart.model');
const { validationResult } = require('express-validator');
// const res = require('express/lib/response');
exports.addToCart=(request,response)=>{
    const errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(401).json({ err: errors.array() });
    Cart.create({ userId: request.body.adminId, productId: request.body.productId }).then(result => {
        return response.status(202).json(result);
    }).catch(err => {
        return response.status(401).json(err);
    })
}