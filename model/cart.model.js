const mongoose =require('mongoose');
const schem=mongoose.Schema
const cartSchema= new mongoose.Schema({
    userId:{
        type:schem.Types.ObjectId,
        ref:'admins'
    },
    productId:{
        type:schem.Types.ObjectId,
        ref:'products'
    }
})
module.exports=mongoose.model('carts',cartSchema);