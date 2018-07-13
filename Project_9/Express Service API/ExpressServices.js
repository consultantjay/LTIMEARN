var express=require('express')
var app=express()
var mongo=require('mongojs')
var db=mongo('project',['flipkart'])

//Filter:
//Color:
app.get('/color/:color',function(req,res) {

var col=new RegExp("^"+req.params.color+"$","i")
  db.flipkart.find({"product_specifications.product_specification.value":col},{product_specifications:1,_id:0},function(err,docs) {
    res.send(docs)
  })
})

//Price
app.get('/price/:low/:high/',function(req,res) {
  var low=parseInt(req.params.low)
  var high=parseInt(req.params.high)
  console.log(low);
  console.log(high);
  db.flipkart.find({$and:[{discounted_price:{$lt:high}},{discounted_price:{$gt:low}}]},{product_name:1},function(err,docs) {
    res.send(docs)
  })
})

//Category
app.get('/Category/:Category/',function(req,res) {
  var cat=new RegExp("^"+req.params.Category,"i")
  console.log(cat);
  db.flipkart.find({"product_category_tree":cat},{product_name:1},function(err,docs) {
    res.send(docs)
  })
})
//------------------------------------------------------------------------------------------------------------------------------

//Overview:
//Category:
app.get('/Category/:Category/',function(req,res) {
  var cat=new RegExp("^"+req.params.Category,"i")
  console.log(cat);
  db.flipkart.find({"product_category_tree":cat},{product_name:1},function(err,docs) {
    res.send(docs)
  })
})

//Gender
app.get('/gender/:gender/',function(req,res) {
  var over=new RegExp("^"+req.params.gender,"i")
  console.log(over);
  db.flipkart.find({"product_specifications.product_specification.value":over},{product_name:1},function(err,docs) {
    res.send(docs)
  })
})
//--------------------------------------------------------------------------------------

//Search
//Brand
app.get('/brand/:brand/',function(req,res) {
  var brand=new RegExp("^"+req.params.brand+"$","i")
  console.log(brand);
  db.flipkart.find({"brand":brand},{product_name:1},function(err,docs) {
    res.send(docs)
  })
})

//Product name
app.get('/product/:product/',function(req,res) {
  var prod=new RegExp("^"+req.params.product,"i")
  console.log(prod);
  db.flipkart.find({"product_name":prod},{product_name:1},function(err,docs) {
    res.send(docs)
  })
})

//Category:
app.get('/Category/:Category/',function(req,res) {
  var cat=new RegExp("^"+req.params.Category,"i")
  console.log(cat);
  db.flipkart.find({"product_category_tree":cat},{product_name:1},function(err,docs) {
    res.send(docs)
  })
})

//--------------------------------------------------------------------------------------

// Sorting->
// Default:
// Popularity:
// Overall rating:
// Newness:
// Price-Low to High:
// Price-High to Low:
app.get('/Sorting/:parameter/:order/',function(req,res) {
  var param=req.params.parameter
  var order=req.params.order
  db.flipkart.aggregate([{$project:{_id:0,[param]:1}},{$sort:{[param]:parseInt(order)}}],function(err,docs) {
  res.send(docs)
  })
})

//-------------------------------------------------------------------------------------------------
//Filters with Sorting

//Color with Sorting:
app.get('/SortFilter/:parameter/:order/:color',function(req,res) {
  var param=req.params.parameter
  var order=req.params.order
  var col=new RegExp("^"+req.params.color,"i")
  // console.log(sort);
  // console.log(order);
  db.flipkart.aggregate([{$match:{"product_specifications.product_specification.value":col}},{$project:{product_name:1,[param]:1}},{$sort:{[param]:parseInt(order)}}],function(err,docs) {
    res.send(docs)
  })
})

// Price with Sorting:
app.get('/SortFilter/:parameter/:order/:low/:high',function(req,res) {
  var param=req.params.parameter
  var order=req.params.order
  var low=parseInt(req.params.low)
  var high=parseInt(req.params.high)
  db.flipkart.aggregate([{$match:{$and:[{discounted_price:{$lt:high}},{discounted_price:{$gt:low}}]}},{$project:{product_name:1,[param]:1}},{$sort:{[param]:parseInt(order)}}],function(err,docs) {
    res.send(docs)
  })
})
// Tags with Sorting:
app.get('/SortFilter/:parameter/:order/:Category',function(req,res) {
  var param=req.params.parameter
  var order=req.params.order
  var cat=new RegExp("^"+req.params.Category,"i")

  db.flipkart.aggregate([{$match:{"product_category_tree":cat}},{$project:{product_name:1,[param]:1}},{$sort:{[param]:parseInt(order)}}],function(err,docs) {
    res.send(docs)
  })
})

// Color & Price with Sorting:
app.get('/SortFilter/:parameter/:order/:color/:low/:high',function(req,res) {
  var param=req.params.parameter
  var order=req.params.order
  var col=new RegExp("^"+req.params.color,"i")
  var low=parseInt(req.params.low)
  var high=parseInt(req.params.high)
  db.flipkart.aggregate([{$match:{$and:[{$and:[{discounted_price:{$lt:high}},{discounted_price:{$gt:low}}]},{"product_specifications.product_specification.value":col}]}},{$project:{product_name:1,[param]:1}},{$sort:{[param]:parseInt(order)}}],function(err,docs) {
    res.send(docs)
  })
})


// Color & Tags with Sorting:
app.get('/SortFilter/:parameter/:order/:color/:Category',function(req,res) {
  var param=req.params.parameter
  var order=req.params.order
  var col=new RegExp("^"+req.params.color,"i")
  var cat=new RegExp("^"+req.params.Category,"i")
  db.flipkart.aggregate([{$match:{$and:[{"product_category_tree":cat},{"product_specifications.product_specification.value":col}]}},{$project:{product_name:1,[param]:1}},{$sort:{[param]:parseInt(order)}}],function(err,docs) {
    res.send(docs)
  })
})

// Price & Tags with Sorting:
app.get('/SortFilter/:parameter/:order/:Category/:low/:high',function(req,res) {
  var param=req.params.parameter
  var order=req.params.order
  var low=parseInt(req.params.low)
  var high=parseInt(req.params.high)
  var cat=new RegExp("^"+req.params.Category,"i")
  db.flipkart.aggregate([{$match:{$and:[{$and:[{discounted_price:{$lt:high}},{discounted_price:{$gt:low}}]},{"product_category_tree":cat}]}},{$project:{product_name:1,[param]:1}},{$sort:{[param]:parseInt(order)}}],function(err,docs) {
  res.send(docs)
  })
})

// Color, Price & Tags with Sorting:
app.get('/SortFilter/:parameter/:order/:Category/:color/:low/:high/',function(req,res) {
  var param=req.params.parameter
  var order=req.params.order
  var low=parseInt(req.params.low)
  var high=parseInt(req.params.high)
  var col=new RegExp("^"+req.params.color,"i")
  var cat=new RegExp("^"+req.params.Category,"i")
  db.flipkart.aggregate([{$match:{$and:[{$and:[{discounted_price:{$lt:high}},{discounted_price:{$gt:low}}]},{"product_specifications.product_specification.value":col},{"product_category_tree":cat}]}},{$project:{product_name:1,[param]:1}},{$sort:{[param]:parseInt(order)}}],function(err,docs) {
    res.send(docs)
  })
})
//----------------------------------------------------------------------------------------------------------

//Multiple Filters

// Color & Price:
app.get('/Filter/:color/:low/:high',function(req,res) {
  // var param=req.params.parameter
  // var order=req.params.order
  var col=new RegExp("^"+req.params.color,"i")
  var low=parseInt(req.params.low)
  var high=parseInt(req.params.high)
  db.flipkart.find({$and:[{$and:[{discounted_price:{$lt:high}},{discounted_price:{$gt:low}}]},{"product_specifications.product_specification.value":col}]},{product_name:1},function(err,docs) {
    res.send(docs)
  })
})

// Color & Tags:
app.get('/Filter/:color/:Category',function(req,res) {
  // var param=req.params.parameter
  // var order=req.params.order
  var col=new RegExp("^"+req.params.color,"i")
  var cat=new RegExp("^"+req.params.Category,"i")
  db.flipkart.find({$and:[{"product_category_tree":cat},{"product_specifications.product_specification.value":col}]},{product_name:1},function(err,docs) {
    res.send(docs)
  })
})

// Price & Tags
app.get('/Filter/:Category/:low/:high',function(req,res) {
  // var param=req.params.parameter
  // var order=req.params.order
  var low=parseInt(req.params.low)
  var high=parseInt(req.params.high)
  var cat=new RegExp("^"+req.params.Category,"i")
  db.flipkart.find({$and:[{$and:[{discounted_price:{$lt:high}},{discounted_price:{$gt:low}}]},{"product_category_tree":cat}]},{product_name:1},function(err,docs) {
    res.send(docs)
  })
})

// Color, price & Tags:
app.get('/Filter/:Category/:color/:low/:high/',function(req,res) {
  // var param=req.params.parameter
  // var order=req.params.order
  var low=parseInt(req.params.low)
  var high=parseInt(req.params.high)
  var col=new RegExp("^"+req.params.color,"i")
  var cat=new RegExp("^"+req.params.Category,"i")
  db.flipkart.find({$and:[{$and:[{discounted_price:{$lt:high}},{discounted_price:{$gt:low}}]},{"product_specifications.product_specification.value":col},{"product_category_tree":cat}]},{product_name:1},function(err,docs) {
    res.send(docs)
  })
})
//---------------------------------------------------------------------------------------------------------
app.listen(3000);
