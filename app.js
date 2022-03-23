const express = require('express');
const port=process.env.PORT || 6000
const app = express();
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://DurgeshRathore:11223344@durgeshcluster.cpmna.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(result=>{
    console.log('Successful');
}).catch(err=>{
    console.log(err);
})
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin.route');
const userRouter = require('./routes/user.route');
const categoryRouter = require('./routes/category.routes');
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.send('Hello Form Server');
})
app.use("/api/admin",adminRouter);
app.use("/api/user",userRouter);
app.use("/api/category",categoryRouter);

app.listen(port,()=>{
    console.log("Server is running on port no."+port);
});
