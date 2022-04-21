
const path=require('path');
const {Storage} = require("@google-cloud/storage");


const storage =  new Storage({
    projectId : "secondpro-c0514",
    keyFilename  : "secondpro-c0514-firebase-adminsdk-qkr5b-c3c0fb020f.json"
    
});

// let filename = request.file.filename;
let bucketName= "gs://secondpro-c0514.appspot.com";

exports.fireBaseStorage= async (request,response,next)=>{
    try{
        console.log("In Firbase try block")
    await storage.bucket(bucketName).upload(path.join(__dirname,'../',"public/images/")+request.file.filename,{
        gzip:true,
        metadata:{
            metadata:{
                firebaseStorageDownloadTokens:"durgeshrathore"
            }
        }
    })
    next();

}
catch(err){
    console.log(err);
}
}

