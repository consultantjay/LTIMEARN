var express=require('express')
var app=express()
var mongo=require('mongojs')
var db=mongo('project',['flipkart'])
var cors=require('cors')
app.use(cors())

app.get('/find',function(req,res) {

  db.flipkart.find({product_category_tree:/^furniture/i}).limit(30,function(err,docs) {
    res.send(docs)
  })
})

app.get('/find/:id',function(req,res) {

  db.flipkart.find({uniq_id:req.params.id},function(err,docs) {
    res.send(docs)
  })
})

app.listen(3000);
