const {res,req}=require('express');
const jwt = require('jsonwebtoken');
exports.tokenauthotication = (req, res, next) => {
    try {
        if (!req.headers.authorization)
            return res.status(201).send("Sign In")
        if (req.headers.authorizeation == null)
            return res.status(201).send("Sign In");

         token = req.headers.authorizeation;
         payload = jwt.verify(token,"ramramramsiyaramsiyaramramramramramramramramram");
        console.log(payload);
        next();
    }
    catch(err) {
        console.log(err);
        return res.status(201).send("Sign In");
    }
}