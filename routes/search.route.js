const express=require('express');
const router=express.Router();


const searchController=require('../controller/search.controller');

router.post("/search",searchController.searchProduct);
module.exports=router;