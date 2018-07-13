var express=require('express');
var cors=require('cors');
var app=express();
app.use(cors());
var bodyParser=require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db=mongojs('pro',['rest']);
app.use(express.static(__dirname));


	app.get('/',function(req,res){
      		 db.rest.aggregate([{$limit:10}],function(err,docs){
                                          res.json(docs);
                                                       }
                                );
                                           }
               );
app.get('/:id',function(req,res){
                   console.log(parseInt(req.params.id) )
      		 db.rest.aggregate([{$match:{"uniqueId": parseInt(req.params.id)}}],function(err,docs){
                                            console.log(docs)
                                          res.send(docs);
                                                       }
                                );
                                           }
               );


app.listen(3000);
console.log("server running on port 3000")
