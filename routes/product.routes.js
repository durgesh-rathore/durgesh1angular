const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller');
const { body } = require('express-validator');
const multer = require('multer');
const tokenAuth=require('../midellwere/token.verification');
const fireBase=require('../midellwere/firebase');
var storage = multer.diskStorage(
    {
        destination: 'public/images',
        filename: function (req, file, cb) {
            cb(null, Date.now() + "-" + file.originalname);
        }
    }
);
var upload = multer({ storage: storage });
router.post("/add",tokenAuth.tokenauthotication,upload.single('productImage'),fireBase.fireBaseStorage,
     body('productName').not().isEmpty(),
    productController.add
);
router.get("/product-list",tokenAuth.tokenauthotication,productController.getproduct);

// router.post("/delete-product", productController.deleteProduct);

// router.post("/update", upload.multiple('productImage'),
//     body('categoryName').not().isEmpty(),
//     body("categoryId").not().isEmpty()
//     , categoryController.update
// );
module.exports = router;