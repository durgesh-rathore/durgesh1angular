const mongoose =require('mongoose');
const schema=mongoose.Schema;
const orderSchema=new mongoose.Schema({
    address:{
        type:String,
        trim:true
    },
    mobile:{
        type:String,
        required:true
    },
    paymentId:{
        type:String,
        required:true
    },
    orderId:{
        type:String,
        trim:true,
        required:true
    },
    amount:{
        type:Number,
        required:true

    },
    userId:{
    type:schema.Types.ObjectId,
    ref:'admins'
        
    },
    productId:[{
        type:schema.Types.ObjectId,
        ref:'products'
    }]
     
})
module.exports=mongoose.model("orders",orderSchema);