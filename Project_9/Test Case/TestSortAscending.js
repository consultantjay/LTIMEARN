var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('project',['flipkart']);


describe('Sort Ascending',function() {

// -----------------------------------------------------------
function sortDefault() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$project:{product_name:1,discounted_price:1}},{$sort:{discounted_price:1}}],function(err,res) {
    // console.log(res)
    count=res[0].product_name
    // console.log(count);
    done();
  })
})
  it('Default Sorting',function () {

    expect(count).to.equal('Geol Wooden Wet and Dry Broom')
  })
}
// -----------------------------------------------------------
function sortProductRating() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
    // console.log(res)
    count=res[0].product_name
    // console.log(count);
    done();
  })
})
  it('Sorting by Product Rating',function () {

    expect(count).to.equal('Sicons Conditioning Conditoner Dog Shampoo')
  })
}
// -----------------------------------------------------------
function sortOverallRating() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$project:{product_name:1,overall_rating:1}},{$sort:{overall_rating:1}}],function(err,res) {
    // console.log(res)
    count=res[0].product_name
    // console.log(count);
    done();
  })
})
  it('Sorting by overall Rating',function () {

    expect(count).to.equal('FabHomeDecor Fabric Double Sofa Bed')
  })
}
// -----------------------------------------------------------
function sortNewness() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$project:{product_name:1,crawl_timestamp:1}},{$sort:{crawl_timestamp:1}}],function(err,res) {
    // console.log(res)
    count=res[0].product_name
    // console.log(count);
    done();
  })
})
  it('Sort by Newness',function () {

    expect(count).to.equal('ShopMantra Che Guevara Revolution 2015 Desk Calendar')
  })
}
// -----------------------------------------------------------
function sortPrice() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$project:{product_name:1,discounted_price:1}},{$sort:{discounted_price:1}}],function(err,res) {
    // console.log(res)
    count=res[0].product_name
    // console.log(count);
    done();
  })
})
  it('Sorting by Price',function () {

    expect(count).to.equal('Geol Wooden Wet and Dry Broom')
  })
}

// -----------------------------------------------------------
function filterColorSort() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$match:{"product_specifications.product_specification.value":/red/i}},{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
    // console.log(res)
    count=res[0].product_name
    // console.log(count);
    done();
  })
})
  it('Filter by Color & default Sort',function () {

    expect(count).to.equal('FabHomeDecor Fabric Double Sofa Bed')
  })
}
// -----------------------------------------------------------
function filterPriceSort() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$match:{$and:[{discounted_price:{$lt:700}},{discounted_price:{$gt:0}}]}},{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
    // console.log(res)
    count=res[0].product_name
    // console.log(count);
    done();
  })
})
  it('Filter by Price & default Sorting',function () {

    expect(count).to.equal('Sicons Conditioning Conditoner Dog Shampoo')
  })
}
// -----------------------------------------------------------
function filterTagsSort() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$match:{"product_category_tree":/baby care/i}},{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
    // console.log(res)
    count=res[0].product_name
    // console.log(count);
    done();
  })
})
  it('Filter by Tags & default sorting',function () {

    expect(count).to.equal('Eurospa Cotton Terry Face Towel Set')
  })
}
// -----------------------------------------------------------

function filterColorPriceSort() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$match:{$and:[{$and:[{discounted_price:{$lt:700}},{discounted_price:{$gt:0}}]},{"product_specifications.product_specification.value":/red/i}]}},{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
    // console.log(res)
    count=res[0].product_name
    // console.log(count);
    done();
  })
})
  it('Filter by Color,Price & Default Sorting',function () {

    expect(count).to.equal('Indcrown Net Embroidered Semi-stitched Lehenga Choli Material')
  })
}
// -----------------------------------------------------------

function filterColorTagsSort() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$match:{$and:[{"product_category_tree":/baby care/i},{"product_specifications.product_specification.value":/red/i}]}},{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
    // console.log(res)
    count=res[0].product_name
    // console.log(count);
    done();
  })
})
  it('Filter by Tags,Color & Default Sorting',function () {

    expect(count).to.equal('Toddla Baby Girl\'s Gathered Dress')
  })
}
// -----------------------------------------------------------

function filterPriceTagsSort() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$match:{$and:[{$and:[{discounted_price:{$lt:700}},{discounted_price:{$gt:0}}]},{"product_category_tree":/baby care/i}]}},{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
    // console.log(res)
    count=res[0].product_name
    // console.log(count);
    done();
  })
})
  it('Filter by Tags,Price & Default Sorting',function () {

    expect(count).to.equal('CHINMAY KIDS Printed Cotton Padded Mosquito Net')
  })
}
// -----------------------------------------------------------

function filterColorTagsPriceSort() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$match:{$and:[{$and:[{discounted_price:{$lt:700}},{discounted_price:{$gt:0}}]},{"product_specifications.product_specification.value":/red/i},{"product_category_tree":/baby care/i}]}},{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
    // console.log(res)
    count=res[0].product_name
    // console.log(count);
    done();
  })
})
  it('Filter by Tags,Price, Color & Default Sorting',function () {

    expect(count).to.equal('Toddla Baby Girl\'s Gathered Dress')
  })
}
// -----------------------------------------------------------

 sortDefault()
 sortProductRating()
 sortOverallRating()
 sortNewness()
 sortPrice()
 filterTagsSort()
 filterPriceSort()
 filterColorSort()
 filterPriceTagsSort()
 filterColorPriceSort()
 filterColorTagsSort()
 filterColorTagsPriceSort()
})
