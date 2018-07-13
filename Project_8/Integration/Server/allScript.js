var cors = require('cors')
var express= require('express')

var fs = require('fs')
var app = express()
app.use(cors())
var mongojs= require('mongojs')
var db=mongojs('amazon',['toys'])

//To fetch 9 items seen as grid on home page
app.get('/home',function(req,res){

    db.toys.find({},{_id:0,uniq_id:1,product_name:1,price:1}).limit(9,
	function(err,data){
              res.send(data)
        })

})

//To fetch bulk data for listing
app.get('/',function(req,res){

    db.toys.find().limit(300,
	function(err,data){
              res.send(data)
        })

})


//To fetch product item by id 
app.get('/productDetails/:id',function(req,res){
var uid= req.params.id.toString()
    db.toys.find({uniq_id:uid},{_id:0,uniq_id:1,product_name:1,price:1,description:1},
	function(err,data){
              res.send(data)
        })

})

app.listen(3000)