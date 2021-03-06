const express = require('express');
const router = express.Router();
const categoryController = require('../controller/category.controller');
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
router.post("/add",tokenAuth.tokenauthotication,upload.single('categoryImage'),fireBase.fireBaseStorage,
     body('categoryName').not().isEmpty(),
    categoryController.add
);
router.get("/category-list",categoryController.getCategory);

// http://localhost:3000/api/category/delete-category/12222
router.post("/delete-category",tokenAuth.tokenauthotication,categoryController.deleteCategory);

router.post("/update", upload.single('newCategory'),
    body('categoryName').not().isEmpty(),
    body("categoryId").not().isEmpty()
    ,categoryController.update1
);
module.exports = router;










