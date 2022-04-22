const express=require('express');
const router=express.Router();


const searchController=require('../controller/search.controller');

router.get("/search/:name",searchController.searchProduct);
module.exports=router;