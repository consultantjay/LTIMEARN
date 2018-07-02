
//Commom for All Statements
//Package required-'mongojs'
var mongojs=require("mongojs");
var db=mongojs('project',['fliipkart'])
// --------------------------------------------------------------------------------------------------------------------------------------------
// Search->
// By brand:
db.flipkart.find({brand:/.*alisha.*/i},{product_name:1},function(err,res) {
  console.log(res)
})

//By category:
db.flipkart.find({product_category_tree:/.*clothing.*/i},{product_name:1},function(err,res) {
  console.log(res)
})

//By product name:
db.flipkart.find({product_name:/AW Bellies/i},{image:1},function(err,res) {
  console.log(res)
})
//--------------------------------------------------------------------------------------------------------------------------------------------
//Product Overview->

// Women:
db.flipkart.find({"product_specifications.product_specification.value":/.*women.*/i},{product_name:1},function(err,res) {
  console.log(res)
})

// Men:
db.flipkart.find({"product_specifications.product_specification.value":/.*men.*/i},{product_name:1},{product_name:1},function(err,res) {
  console.log(res)
})

// Shoes:
db.flipkart.find({"product_category_tree":/.*shoes.*/i},{product_name:1},function(err,res) {
  console.log(res)
})

// Clothing:
db.flipkart.find({"product_category_tree":/.*clothing.*/i},{product_name:1},function(err,res) {
  console.log(res)
})

// Toys:
db.flipkart.find({"product_category_tree":/.*toys.*/i},{product_name:1},{product_name:1},function(err,res) {
  console.log(res)
})

// Sports:
db.flipkart.find({"product_category_tree":/.*sports.*/},{product_name:1},function(err,res) {
  console.log(res)
})

// ----------------------------------------------------------------------------------------------------------------------------------------------
// Filters->

// By Price:
db.flipkart.find({$and:[{discounted_price:{$lt:700}},{discounted_price:{$gt:0}}]},{product_name:1},function(err,res) {
  console.log(res)
})

// By Color:
db.flipkart.find({"product_specifications.product_specification.value":/red/i},{product_name:1},function(err,res) {
  console.log(res)
})

// By Tags:
db.flipkart.find({"product_category_tree":/baby care/i},{product_name:1},function(err,res) {
  console.log(res)
})

// ------------------------------------------------------------------------------------------------------------------------------------------------
// Sorting->

// Default:
db.flipkart.aggregate([{$project:{product_name:1,discounted_price:1}},{$sort:{discounted_price:1}}],function(err,res) {
  console.log(res)
})
// Popularity:
db.flipkart.aggregate([{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
  console.log(res)
})
// Overall rating:
db.flipkart.aggregate([{$project:{product_name:1,overall_rating:1}},{$sort:{overall_rating:1}}],function(err,res) {
  console.log(res)
})
// Newness:
db.flipkart.aggregate([{$project:{product_name:1,crawl_timestamp:1}},{$sort:{crawl_timestamp:1}}],function(err,res) {
  console.log(res)
})
// Price-Low to High:
db.flipkart.aggregate([{$project:{product_name:1,discounted_price:1}},{$sort:{discounted_price:1}}],function(err,res) {
  console.log(res)
})
// Price-High to Low:
db.flipkart.aggregate([{$project:{product_name:1,discounted_price:1}},{$sort:{discounted_price:-1}}],function(err,res) {
  console.log(res)
})
// --------------------------------------------------------------------------------------------------------------------------------------------
// Multiple Filters->

// Color & Price:
db.flipkart.find({$and:[{$and:[{discounted_price:{$lt:700}},{discounted_price:{$gt:0}}]},{"product_specifications.product_specification.value":/red/i}]},{product_name:1},function(err,res) {
  console.log(res)
})

// Color & Tags:
db.flipkart.find({$and:[{"product_category_tree":/baby care/i},{"product_specifications.product_specification.value":/red/i}]},{product_name:1},function(err,res) {
  console.log(res)
})

// Price & Tags
db.flipkart.find({$and:[{$and:[{discounted_price:{$lt:700}},{discounted_price:{$gt:0}}]},{"product_category_tree":/baby care/i}]},{product_name:1},function(err,res) {
  console.log(res)
})

// Color, price & Tags:
db.flipkart.find({$and:[{$and:[{discounted_price:{$lt:700}},{discounted_price:{$gt:0}}]},{"product_specifications.product_specification.value":/red/i},{"product_category_tree":/baby care/i}]},{product_name:1},function(err,res) {
  console.log(res)
})
// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Sorting with filters->

// Color with Sorting:
db.flipkart.aggregate([{$match:{"product_specifications.product_specification.value":/red/i}},{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}]),function(err,res) {
  console.log(res)
})

// Price with Sorting:
db.flipkart.aggregate([{$match:{$and:[{discounted_price:{$lt:700}},{discounted_price:{$gt:0}}]}},{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
  console.log(res)
})

// Tags with Sorting:
db.flipkart.aggregate([{$match:{"product_category_tree":/baby care/i}},{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
  console.log(res)
})

// Color & Price with Sorting:
db.flipkart.aggregate([{$match:{$and:[{$and:[{discounted_price:{$lt:700}},{discounted_price:{$gt:0}}]},{"product_specifications.product_specification.value":/red/i}]}},{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
  console.log(res)
})

// Color & Tags with Sorting:
db.flipkart.aggregate([{$match:{$and:[{"product_category_tree":/baby care/i},{"product_specifications.product_specification.value":/red/i}]}},{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
  console.log(res)
})

// Price & Tags with Sorting:
db.flipkart.aggregate([{$match:{$and:[{$and:[{discounted_price:{$lt:700}},{discounted_price:{$gt:0}}]},{"product_category_tree":/baby care/i}]}},{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
  console.log(res)
})

// Color, Price & Tags with Sorting:
db.flipkart.aggregate([{$match:{$and:[{$and:[{discounted_price:{$lt:700}},{discounted_price:{$gt:0}}]},{"product_specifications.product_specification.value":/red/i},{"product_category_tree":/baby care/i}]}},{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
  console.log(res)
})
