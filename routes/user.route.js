const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const tokenAuth=require("../midellwere/token.verification.js");
const { body } = require('express-validator');

router.get("/view-user",userController.userList);
router.post("/signup",
    body('email').isEmail(),
    body('password', 'password length must be 5 letter long').isLength(5),
    userController.signup
);

router.post("/signin",
    body("email").isEmail(),
    body("password").not().isEmpty(),
    userController.signin
);
module.exports = router;