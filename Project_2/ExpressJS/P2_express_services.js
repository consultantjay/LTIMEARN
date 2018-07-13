var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('final',['doctor']);
app.use(express.static(__dirname));

//-------------------------------------------------------

//Fetch all data 

app.get('/list',function(req,res){
db.doctor.find(function(err,docs){res.json(docs);})
});

//Fetch data by name, specialization, area

app.get('/name/:name/specialization/:specialization/area/:area',function(req,res){
console.log(req.params.name+"  "+req.params.specialization+"  "+req.params.area);
db.doctor.find({"name":req.params.name,"specialization":req.params.specialization,"area":req.params.area},function(err,docs){res.json(docs);})
});

//Fetch data by name, specialization

app.get('/name/:name/specialization/:specialization',function(req,res){
console.log(req.params.name+"  "+req.params.specialization);
db.doctor.find({"name":req.params.name,"specialization":req.params.specialization},function(err,docs){res.json(docs);})
});

//Fetch data by name, area

app.get('/name/:name/area/:area',function(req,res){
console.log(req.params.name+"  "+req.params.area);
db.doctor.find({"name":req.params.name,"area":req.params.area},function(err,docs){res.json(docs);})
});

//Fetch data by specialization, area

app.get('/specialization/:specialization/area/:area',function(req,res){
console.log(req.params.specialization+"  "+req.params.area);
db.doctor.find({"specialization":req.params.specialization,"area":req.params.area},function(err,docs){res.json(docs);})
});

//Fetch data by name

app.get('/name/:name',function(req,res){
console.log(req.params.name);
db.doctor.find({"name":req.params.name},function(err,docs){res.json(docs);})
});

//Fetch data by specialization

app.get('/specialization/:specialization',function(req,res){
console.log(req.params.specialization);
db.doctor.find({"specialization":req.params.specialization},function(err,docs){res.json(docs);})
});

//Fetch data by area

app.get('/area/:area',function(req,res){
console.log(req.params.area);
db.doctor.find({"area":req.params.area},function(err,docs){res.json(docs);})
});

//Fetch data by specialization, qualification, area

app.get('/specialization/:specialization/qualification/:qualification/area/:area',function(req,res){
console.log(req.params.specialization+"  "+req.params.qualification+"  "+req.params.area);
db.doctor.find({"specialization":req.params.specialization,"qualification":req.params.qualification,"area":req.params.area},function(err,docs){res.json(docs);})
});

//Fetch data by specialization, qualification

app.get('/specialization/:specialization/qualification/:qualification',function(req,res){
console.log(req.params.specialization+"  "+req.params.qualification);
db.doctor.find({"specialization":req.params.specialization,"qualification":req.params.qualification},function(err,docs){res.json(docs);})
});

//Fetch data by qualification, area

app.get('/qualification/:qualification/area/:area',function(req,res){
console.log(req.params.qualification+"  "+req.params.area);
db.doctor.find({"qualification":req.params.qualification,"area":req.params.area},function(err,docs){res.json(docs);})
});

//Fetch data by specialization, area

app.get('/specialization/:specialization/area/:area',function(req,res){
console.log(req.params.specialization+"  "+req.params.area);
db.doctor.find({"specialization":req.params.specialization,"area":req.params.area},function(err,docs){res.json(docs);})
});


app.listen(3000);
console.log("Server Started on port 3000");
