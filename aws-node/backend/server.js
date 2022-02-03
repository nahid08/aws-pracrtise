const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const aws = require("aws-sdk");

const app = express();

const upload = multer({dest: 'uploads/'})

const region = "ap-south-1";
const accessKeyId = "AKIAWOK7KL2NKJ2HXZMV";
const secretAccessKey= "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";

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey
})


app.use(cors({
    origin: "http://localhost:3001"
}))

 
const params = {
    Bucket: "demo5408",
    Key: 'demo2'
}


s3.getObject(params).promise().then(val => console.log(val))



app.post('/image', upload.single('image') ,(req, res) => {
     const fileContent = fs.readFileSync(req.file.path);
     console.log(fileContent);
     
     const params = {
         Bucket: "demo5408",
         Key: 'demo2',
         Body: fileContent
     }

     s3.upload(params, function(err,data) {
         if(err)
         {
             console.log('no');
             res.json({});
         }
         console.log(data);
     })
    
    res.json({});
})

app.listen(3000, () => {
    console.log('dasd');
})