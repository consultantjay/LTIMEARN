var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('project',['flipkart']);


describe('Count Mongo',function() {
function brand() {
  var count=0
  before(function (done) {
    db.flipkart.find({brand:/.*alisha.*/i},{product_name:1},function(err,res) {
      // console.log(res)
      count=res.length
      // console.log(count);
      done();
    })
  })
    it('brand',function () {

      expect(count).to.equal(6)
    })
  }
// ---------------------------------------------------------
function category() {

var count=0
before(function (done) {
db.flipkart.find({product_category_tree:/^clothing.*/i},{product_name:1},function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Category',function () {

    expect(count).to.equal(6157)
  })
}
// -----------------------------------------------------------
function product() {

var count=0
before(function (done) {
db.flipkart.find({product_name:/^AW Bellies/i},{image:1},function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Product Name',function () {

    expect(count).to.equal(1)
  })
}
// -----------------------------------------------------------
function overviewGender() {

var count=0
before(function (done) {
db.flipkart.find({"product_specifications.product_specification.value":/^women.*/i},{product_name:1},function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Overview by gender',function () {

    expect(count).to.equal(7762)
  })
}
// -----------------------------------------------------------
function overviewTags() {

var count=0
before(function (done) {
db.flipkart.find({"product_category_tree":/^sports/i},{product_name:1},function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Overview by Tags',function () {

    expect(count).to.equal(166)
  })
}
// -----------------------------------------------------------
function filterPrice() {

var count=0
before(function (done) {
db.flipkart.find({$and:[{discounted_price:{$lt:700}},{discounted_price:{$gt:0}}]},{product_name:1},function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Filter by Price',function () {

    expect(count).to.equal(12139)
  })
}
// -----------------------------------------------------------
function filterColor() {

var count=0
before(function (done) {
db.flipkart.find({"product_specifications.product_specification.value":/red/i},{product_name:1},function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Filter by Color',function () {

    expect(count).to.equal(2774)
  })
}
// -----------------------------------------------------------
function filterTags() {

var count=0
before(function (done) {
db.flipkart.find({"product_category_tree":/baby care/i},{product_name:1},function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Filter by Tags',function () {

    expect(count).to.equal(483)
  })
}
// -----------------------------------------------------------
function sortDefault() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$project:{product_name:1,discounted_price:1}},{$sort:{discounted_price:1}}],function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Default Sorting',function () {

    expect(count).to.equal(19930)
  })
}
// -----------------------------------------------------------
function sortProductRating() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Sorting by Product Rating',function () {

    expect(count).to.equal(19930)
  })
}
// -----------------------------------------------------------
function sortOverallRating() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$project:{product_name:1,overall_rating:1}},{$sort:{overall_rating:1}}],function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Sorting by overall Rating',function () {

    expect(count).to.equal(19930)
  })
}
// -----------------------------------------------------------
function sortNewness() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$project:{product_name:1,crawl_timestamp:1}},{$sort:{crawl_timestamp:1}}],function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Sort by Newness',function () {

    expect(count).to.equal(19930)
  })
}
// -----------------------------------------------------------
function sortPrice() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$project:{product_name:1,discounted_price:1}},{$sort:{discounted_price:1}}],function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Sorting by Price',function () {

    expect(count).to.equal(19930)
  })
}
// -----------------------------------------------------------
function filterColorPrice() {

var count=0
before(function (done) {
db.flipkart.find({$and:[{$and:[{discounted_price:{$lt:700}},{discounted_price:{$gt:0}}]},{"product_specifications.product_specification.value":/red/i}]},{product_name:1},function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Filter by Color & Price',function () {

    expect(count).to.equal(1609)
  })
}
// -----------------------------------------------------------
function filterColorTags() {

var count=0
before(function (done) {
db.flipkart.find({$and:[{"product_category_tree":/baby care/i},{"product_specifications.product_specification.value":/red/i}]},{product_name:1},function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Filter by Color & Tags',function () {

    expect(count).to.equal(40)
  })
}
// -----------------------------------------------------------
function filterPriceTags() {

var count=0
before(function (done) {
db.flipkart.find({$and:[{$and:[{discounted_price:{$lt:700}},{discounted_price:{$gt:0}}]},{"product_category_tree":/baby care/i}]},{product_name:1},function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Filter by Price & Tags',function () {

    expect(count).to.equal(287)
  })
}
// -----------------------------------------------------------
function filterPriceColorTags() {

var count=0
before(function (done) {
db.flipkart.find({$and:[{$and:[{discounted_price:{$lt:700}},{discounted_price:{$gt:0}}]},{"product_specifications.product_specification.value":/red/i},{"product_category_tree":/baby care/i}]},{product_name:1},function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Filter by Price,Tags & Colors',function () {

    expect(count).to.equal(24)
  })
}
// -----------------------------------------------------------
function filterColorSort() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$match:{"product_specifications.product_specification.value":/red/i}},{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Filter by Color & default Sort',function () {

    expect(count).to.equal(2774)
  })
}
// -----------------------------------------------------------
function filterPriceSort() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$match:{$and:[{discounted_price:{$lt:700}},{discounted_price:{$gt:0}}]}},{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Filter by Price & default Sorting',function () {

    expect(count).to.equal(12139)
  })
}
// -----------------------------------------------------------
function filterTagsSort() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$match:{"product_category_tree":/baby care/i}},{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Filter by Tags & default sorting',function () {

    expect(count).to.equal(483)
  })
}
// -----------------------------------------------------------

function filterColorPriceSort() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$match:{$and:[{$and:[{discounted_price:{$lt:700}},{discounted_price:{$gt:0}}]},{"product_specifications.product_specification.value":/red/i}]}},{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Filter by Color,Price & Default Sorting',function () {

    expect(count).to.equal(1609)
  })
}
// -----------------------------------------------------------

function filterColorTagsSort() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$match:{$and:[{"product_category_tree":/baby care/i},{"product_specifications.product_specification.value":/red/i}]}},{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Filter by Tags,Color & Default Sorting',function () {

    expect(count).to.equal(40)
  })
}
// -----------------------------------------------------------

function filterPriceTagsSort() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$match:{$and:[{$and:[{discounted_price:{$lt:700}},{discounted_price:{$gt:0}}]},{"product_category_tree":/baby care/i}]}},{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Filter by Tags,Price & Default Sorting',function () {

    expect(count).to.equal(287)
  })
}
// -----------------------------------------------------------

function filterColorTagsPriceSort() {

var count=0
before(function (done) {
db.flipkart.aggregate([{$match:{$and:[{$and:[{discounted_price:{$lt:700}},{discounted_price:{$gt:0}}]},{"product_specifications.product_specification.value":/red/i},{"product_category_tree":/baby care/i}]}},{$project:{product_name:1,product_rating:1}},{$sort:{product_rating:1}}],function(err,res) {
    // console.log(res)
    count=res.length
    // console.log(count);
    done();
  })
})
  it('Filter by Tags,Price, Color & Default Sorting',function () {

    expect(count).to.equal(24)
  })
}
// -----------------------------------------------------------
 brand()
 category()
 product()
 overviewGender()
 overviewTags()
 filterPrice()
 filterColor()
 filterTags()
 sortProductRating()
 sortOverallRating()
 sortDefault()
 sortNewness()
 sortPrice()
 filterColorPrice()
 filterPriceTags()
 filterColorTags()
 filterPriceColorTags()
 filterTagsSort()
 filterPriceSort()
 filterColorSort()
 filterPriceTagsSort()
 filterColorPriceSort()
 filterColorTagsSort()
 filterColorTagsPriceSort()


})
