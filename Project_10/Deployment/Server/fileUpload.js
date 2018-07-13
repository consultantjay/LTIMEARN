var express =   require("express");  
var multer  =   require('multer');  
var app =   express();  

var storage =   multer.diskStorage({  
  destination: function (req, file, callback) {  
    callback(null, './uploads');  
  },  
  filename: function (req, file, callback) {  
    callback(null, file.originalname);  
  }  
});  
var upload = multer({ storage : storage}).single('file');  
  
  
app.post('/upload',function(req,res){  
console.log('request to aai');  
  upload(req,res,function(err) {  
        if(err) {  
            return res.end("Error uploading file.");  
        }  
        res.end("File is uploaded successfully!");  
    });  
});  
  
app.listen(3010,function(){  
    console.log("Server is running on port 3010");  
});  