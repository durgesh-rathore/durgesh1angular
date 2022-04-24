const Category = require('../model/category.model');
const request= require('request');
// const path=require('path');
const path=require('path');
const {Storage} = require("@google-cloud/storage");

const {validationResult} = require('express-validator');
const storage =  new Storage({
    projectId : "secondpro-c0514",
    keyFilename  : "secondpro-c0514-firebase-adminsdk-qkr5b-c3c0fb020f.json"
    
});
let bucketName= "gs://secondpro-c0514.appspot.com";
fireBaseStorage= async (filed)=>{
  try{
      console.log("In Firbase try block")
     await storage.bucket(bucketName).upload(filed,{
      gzip:true,
      metadata:{
          metadata:{
              firebaseStorageDownloadTokens:"durgeshrathore"
          }
      }
     })
    // next();

 }


catch(err){
console.log(err);
}
}
// const fireBase=require('../midellwere/firebase')
// const port=process.env.PORT || 3000;


exports.update1 = (request,response,next)=>{
  // console.log(request.file.filename);
  console.log(request.body.categoryName);
  //  const errors = validationResult(request);
  //  if(!errors.isEmpty())
  //    return response.status(400).json({errors: errors.array()});
     let newCategory;
    //  console.log(request);
     if(request.file){
       newCategory="https://firebasestorage.googleapis.com/v0/b/secondpro-c0514.appspot.com/o/"+request.file.filename+"?alt=media&token=durgeshrathore";
      fireBaseStorage(path.join("public/images/")+request.file.filename) 
      console.log(request.file)
       request:({
         url:request.body.oldImage,
         qs:{
           key: "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDEua5RJdAiyj8k\nSB4SkSXdidtVfFgSjQYfup61DGkY3tsa9wLZiwoXnwTNGGtsvdI7akS8SrCXE8Iv\nWklj0vTtaDFduERSJymwxozd8JxmN4VHYUXa/lZzhCHxpoJl5pvo4uUS4b64UVxo\nvV2ZDlApBrMlTL/ngow8kIkOZVBB5QRE6W4caVVHS3RFC/0XWMgQGrvOxWDZsZie\nqOsuij/WYb0Dtzk2emNx/fjOBH4+ecUEKYkvUbVubS+QNHUon2HeJr7c7Xyxmmj6\nA20g0gBiGBXm64tD6MajmbnD6AHL/RksTFj+882vzrYiM/lGK9Ci4ZaF8bUXAOTX\nfAUI8sF5AgMBAAECggEADKWoSoC9EwOAEC/PuR9aORYcAvCpw9WLo34OpnKMDiSD\nnwXqybwJ089uElZjz5ubeKTiEt3VYP0M8pjiF3gQNXQJmm4WfFaWtE3rb/hAQcUH\nfTmIcWYA/k+sE/pBr1XmR5BQrEhVh8l5QKWN7yFPr3eGDFuVCcfnhpw/J20Ffhrj\ncdxzdcIWqWj4ACxWoUvUzwYMa6/LorjGZTEOPLJiR9iobLZvVSdyQIPxSvuruDCV\nC/do4gq4bmKfngiun5FHJHPQtH0W7+h0r/hjIy5SeHRTdcrgnkJKqYBPA5BIa+bm\n1TK7VOmG0mbKo8mkXZ9CmWzOLCXEppkvcwqfNacstQKBgQDkCHOMgVoMiV38HzWy\nkAVOiKOhINbZsdry91Xefb2a1QsOHHqzIfcbqdEQZEz2XCMVBXACqbpRcCBgq9jJ\nZhYZib6onk6Sx3WtoZLu1aP/PCcsxoqDzQZCqpGzTTO5RKMFrPX/qcSg2tWpLDCd\nXA6pEplGwWkUxnps2atUQ8HHxQKBgQDc2kMoLoXg8pGeqVU/U0WN3MgtdJNh7Ged\ncBDHeAa/kvSRkE/EVti3NEWmLFIIbo5UdMFIF9ns2bQdy6AfnYn71Uw71kbYefh2\nPBMoin6rmHT6rdrf/fYZtwRB1aucUllRTNdbdz/PMFmcr4N6lSXIx+ZErobYlknb\nZboSgJl6JQKBgHHjtrJKOItiYEp32/3e6IecvvzOxf/cUJpg5cZFztjx5p+Zob6u\nDBkI653gOoAg7HSnTpZF5wSdl84whgmwrwD6Rvs4dc3hSOj7dcNLeKkVhgta7ft9\n/s51GmgO+vJhUXqYNBUI2WftZCEmLPGq9LeEzoEEQFNb/fE3ldZ0MOhxAoGAeuqz\nM9rowjDfIRoHiw4SiQkXFE1sdbS4WmRzwkCoKNlmatmRu6nGRfi+xuSl53F4n8K3\njCNSM8NavraE8POiR1oIaskwdu0zfsKiuw6Rv3lDqf028zGKVfeJVAbS01b1xQzq\nU0rEZdD4Hv+EQqZd+ChhnVoxTLwgcQ5mCEQwp00CgYEAlqoncnlgXFKs7zWZN38U\nppQlF+zT+kv1zdqqvDnVtB39ooUzRrVm1BnYX1+4RF/TrP6ejQA1InBCXjI7eaze\nj2QHJJT5qjikJWXQA/G5CY0ygJGs+rS9f6koqA9g5ch/LNRZkw/gbHWig84NtS4f\nLZZ5vWlmiN88/SYKtcJqTgI",
           method: 'DELETE'
         }
       }) 
     }
     else{
       console.log("ID"+request.body.categoryId);
       newCategory=request.body.oldImage;
       console.log("old Images"+newCategory);
     }
   Category.updateOne({_id: request.body.categoryId},
       {
            // $set:{
               categoryName: request.body.categoryName,
               // categoryImageUrl: "http://localhost:3000/images/"+request.file.filename
               categoryImageUrl:newCategory
            // }
       }).then(result=>{
            if(result){
              console.log(result);
            return response.status(204).json(result);
            }
             else
             console.log(result);
            //  return response.status(404).json({message: 'record not found'})
       }).catch(err=>{
         return response.status(500).json({message: 'Something went wrong..'});
       });
}

exports.deleteCategory = (request,response)=>{
    Category.deleteOne({_id: request.body.id})
    .then(result=>{
      if(result.deletedCount)
        return response.status(202).json({message: 'success'});
      else
        return response.status(204).json({message: 'not deleted'});  
    })
    .catch(err=>{
      return response.status(500).json({message: 'Something went wrong'});
    });
}
exports.getCategory = (request,response)=>{
    Category.find().
    then(results=>{
        return response.status(200).json(results);
    })
    .catch(err=>{
        return response.status(500).json({message: 'Sever Error'});
    });
}

exports.add = (request,response)=>{
  console.log(request.body);
  console.log(request.file);  
  const errors = validationResult(request);
  if(!errors.isEmpty())
    return response.status(400).json({errors: errors.array()});
  
  Category.create({
    categoryName: request.body.categoryName,
     categoryImageUrl:"https://firebasestorage.googleapis.com/v0/b/secondpro-c0514.appspot.com/o/"+request.file.filename+"?alt=media&token=durgeshrathore"
      //  categoryImageUrl: "http://localhost:3000/images/"+request.file.filename
    //  categoryImageUrl: "https://angularapi-api.herokuapp.com/images/"+request.file.filename
    
  })
  .then(result=>{
      return response.status(201).json(result);
  })
  .catch(err=>{
      return response.status(403).json({message: "Oops! Something went wrong.."});
  });  
}
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNjI0MzM4M2JkZGUwZDU5ZWFiZDA3MzIwIiwiaWF0IjoxNjQ5ODQ3MTE4fQ.u1GI8w2LWko8g_nOEygP9kam40UhxbGvFxiTb7ie6w8