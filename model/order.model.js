const mongoose =require('mongoose');
const schema=mongoose.Schema;
const orderSchema=new mongoose.Schema({
    address:{
        type:String,
        trim:true
    },
    userId:{
    adminId:schema.Types.ObjectId,
        
    },
    productId:{
        productId:schema.Types.ObjectId
    }
     
})