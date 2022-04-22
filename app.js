const express = require('express');
// const Razorpay=require('razorpay');
const app = express();
const cors = require('cors');
const port=process.env.PORT || 3000


const path = require('path');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://DurgeshRathore:11223344@durgeshcluster.cpmna.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then
(result=>{
    console.log('Successful');
}).catch(err=>{
    console.log(err);
})
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin.route');
// const userRouter = require('./routes/user.route');
const categoryRouter = require('./routes/category.routes');
const productRouter=require('./routes/product.routes');
const cartRouter=require('./routes/cart.route')
const orderRoutes=require('./routes/order.route');
const userRouter = require('./routes/user.route');
const searchRouter=require('./routes/search.route')

app.use(cors());
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.send('Hello Form Server');
});

app.use("/api/admin",adminRouter);
app.use("/api/user",userRouter);
app.use("/api/category",categoryRouter);
app.use("/api/product",productRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRoutes);
app.use('/api/user',userRouter);
app.use('/api',searchRouter);
app.listen(port,(r)=>{
    console.log("Server is running on port no."+port);
    //    console.log("server is run");
});
