var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pizza_res',['res']);

var data="";

//check count by city
describe('Test by city name and get count',function(){
	before(function(done){
		db.res.find({city:"Bend"},function(err,res){
			data = res.length;
			done();
		});
	});

	it('check count',function(){
		expect(data).to.equal(4);
	});
});

//check length by city
describe('Test by city and get length of one document',function(){
	before(function(done){
		db.res.find({city:"Bend"},function(err,res){
			data = Object.keys(res[0]).length;
			done();
		});
	});

	it('check length',function(){
		expect(data).to.equal(15);
	});
});

//check value by city
describe('Test by city and get restaurant name of first document',function(){
	before(function(done){
		db.res.find({city:"Bend"},function(err,res){
			data = res[0].name;
			done();
		});
	});

	it('check value',function(){
		expect(data).to.equal("Little Pizza Paradise");
	});
});

//check data type by city
describe('Test by city and get data type',function(){
	before(function(done){
		db.res.find({city:"Bend"},function(err,res){
			data = res[0];
			done();
		});
	});

	it('check data type',function(){
		expect(typeof(data._id)).to.equal("object");
		expect(typeof(data.id)).to.equal("string");
		expect(typeof(data.address)).to.equal("string");
		expect(typeof(data.city)).to.equal("string");
		expect(typeof(data.country)).to.equal("string");
		expect(typeof(data.latitude)).to.equal("number");
		expect(typeof(data.longitude)).to.equal("number");
		expect(typeof(data.menuPageURL)).to.equal("string");
		expect(typeof(data.menus)).to.equal("object");
		expect(typeof(data.name)).to.equal("string");
		expect(typeof(data.postalCode)).to.equal("number");
		expect(typeof(data.priceRangeMin)).to.equal("number");
		expect(typeof(data.priceRangeMax)).to.equal("number");
		expect(typeof(data.reviews)).to.equal("number");
		expect(typeof(data.ratings)).to.equal("number");
	});
});

//check value by city(data in ascending order)
describe('Test by city and get restaurant name of first document by sorting in ascending order',function(){
	before(function(done){
		db.res.aggregate({$match:{city:"Bend"}},{$sort:{"menus.amount":1}},function(err,res){
			data = res[0].name;
			done();
		});
	});

	it('check value in ascending order',function(){
		expect(data).to.equal("Flatbread Neapolitan Pizzeria");
	});
});

//check value by city(data in descending order)
describe('Test by city and get restaurant name of first document by sorting in descending order',function(){
	before(function(done){
		db.res.aggregate({$match:{city:"Bend"}},{$sort:{"menus.amount":-1}},function(err,res){
			data = res[0].name;
			done();
		});
	});

	it('check value in descending order',function(){
		expect(data).to.equal("Little Pizza Paradise");
	});
});

//-------------------------------------------------------------

//check count by pizza name
describe('Test by pizza name and get count',function(){
	before(function(done){
		db.res.find({"menus.name":"Cheese Pizza"},function(err,res){
			data = res.length;
			done();
		});
	});

	it('check count',function(){
		expect(data).to.equal(136);
	});
});

//check length by pizza name
describe('Test by pizza and get length of one document',function(){
	before(function(done){
		db.res.find({"menus.name":"Cheese Pizza"},function(err,res){
			data = Object.keys(res[0]).length;
      //console.log(data);
			done();
		});
	});

	it('check length',function(){
		expect(data).to.equal(15);
	});
});

//check value by pizza name
describe('Test by pizza name and get city of first document',function(){
	before(function(done){
		db.res.find({"menus.name":"Cheese Pizza"},function(err,res){
			data = res[0].city;
			done();
		});
	});

	it('check value',function(){
		expect(data).to.equal("Bend");
	});
});

//check data type by pizza name
describe('Test by pizza name and get data type',function(){
	before(function(done){
		db.res.find({"menus.name":"Cheese Pizza"},function(err,res){
			data = res[0];
			done();
		});
	});

	it('check data type',function(){
		expect(typeof(data._id)).to.equal("object");
		expect(typeof(data.id)).to.equal("string");
		expect(typeof(data.address)).to.equal("string");
		expect(typeof(data.city)).to.equal("string");
		expect(typeof(data.country)).to.equal("string");
		expect(typeof(data.latitude)).to.equal("number");
		expect(typeof(data.longitude)).to.equal("number");
		expect(typeof(data.menuPageURL)).to.equal("string");
		expect(typeof(data.menus)).to.equal("object");
		expect(typeof(data.name)).to.equal("string");
		expect(typeof(data.postalCode)).to.equal("number");
		expect(typeof(data.priceRangeMin)).to.equal("number");
		expect(typeof(data.priceRangeMax)).to.equal("number");
		expect(typeof(data.reviews)).to.equal("number");
		expect(typeof(data.ratings)).to.equal("number");
	});
});

//check value by pizza name(data in ascending order)
describe('Test by pizza name and get city of first document by sorting in ascending order',function(){
	before(function(done){
		db.res.aggregate({$match:{"menus.name":"Cheese Pizza"}},{$sort:{"menus.amount":1}},function(err,res){
			data = res[0].city;
			done();
		});
	});

	it('check value in ascending order',function(){
		expect(data).to.equal("Missouri City");
	});
});

//check value by pizza name(data in descending order)
describe('Test by pizza name and get city of first document by sorting in descending order',function(){
	before(function(done){
		db.res.aggregate({$match:{"menus.name":"Cheese Pizza"}},{$sort:{"menus.amount":-1}},function(err,res){
			data = res[0].city;
			done();
		});
	});

	it('check value in descending order',function(){
		expect(data).to.equal("Buffalo");
	});
});

//----------------------------------------------------------

//check count by restaurant name
describe('Test by restaurant name and get count',function(){
	before(function(done){
		db.res.find({name:"Little Pizza Paradise"},function(err,res){
			data = res.length;
			done();
		});
	});

	it('check count',function(){
		expect(data).to.equal(2);
	});
});

//check length by restaurant name
describe('Test by restaurant and length of one document',function(){
	before(function(done){
		db.res.find({name:"Little Pizza Paradise"},function(err,res){
			data = Object.keys(res[0]).length;
      //console.log(data);
			done();
		});
	});

	it('check length',function(){
		expect(data).to.equal(15);
	});
});

//check value by restaurant name
describe('Test by restaurant name and get city of first document',function(){
	before(function(done){
		db.res.find({name:"Little Pizza Paradise"},function(err,res){
			data = res[0].city;
			done();
		});
	});

	it('check value',function(){
		expect(data).to.equal("Bend");
	});
});

//check data type by restaurant name
describe('Test by restaurant name and get data type',function(){
	before(function(done){
		db.res.find({name:"Little Pizza Paradise"},function(err,res){
			data = res[0];
			done();
		});
	});

	it('check data type',function(){
		expect(typeof(data._id)).to.equal("object");
		expect(typeof(data.id)).to.equal("string");
		expect(typeof(data.address)).to.equal("string");
		expect(typeof(data.city)).to.equal("string");
		expect(typeof(data.country)).to.equal("string");
		expect(typeof(data.latitude)).to.equal("number");
		expect(typeof(data.longitude)).to.equal("number");
		expect(typeof(data.menuPageURL)).to.equal("string");
		expect(typeof(data.menus)).to.equal("object");
		expect(typeof(data.name)).to.equal("string");
		expect(typeof(data.postalCode)).to.equal("number");
		expect(typeof(data.priceRangeMin)).to.equal("number");
		expect(typeof(data.priceRangeMax)).to.equal("number");
		expect(typeof(data.reviews)).to.equal("number");
		expect(typeof(data.ratings)).to.equal("number");
	});
});

//check value by restaurant(data in ascending order)
describe('Test by restaurant name and get city of first document by sorting in ascending order',function(){
	before(function(done){
		db.res.aggregate({$match:{name:"Little Pizza Paradise"}},{$sort:{"menus.amount":1}},function(err,res){
			data = res[0].city;
			done();
		});
	});

	it('check value in ascending order',function(){
		expect(data).to.equal("Bend");
	});
});

//check value by restaurant(data in descending order)
describe('Test by restaurant name and get city of first document by sorting in descending order',function(){
	before(function(done){
		db.res.aggregate({$match:{name:"Little Pizza Paradise"}},{$sort:{"menus.amount":-1}},function(err,res){
			data = res[0].city;
			done();
		});
	});

	it('check value in descending order',function(){
		expect(data).to.equal("Bend");
	});
});

//---------------------------------------------------------

//check count by city and pizza name
describe('Test by city, pizza name and get count',function(){
	before(function(done){
		db.res.find({city:"Bend","menus.name":"Cheese Pizza"},function(err,res){
			data = res.length;
			done();
		});
	});

	it('check count',function(){
		expect(data).to.equal(1);
	});
});

//check length by city an pizza name
describe('Test by city, pizza name and get length of one document',function(){
	before(function(done){
		db.res.find({city:"Bend","menus.name":"Cheese Pizza"},function(err,res){
			data = Object.keys(res[0]).length;
			done();
		});
	});

	it('check length',function(){
		expect(data).to.equal(15);
	});
});

//check value by city and pizza name
describe('Test by city, pizza name and get restaurant name of one document',function(){
	before(function(done){
		db.res.find({city:"Bend","menus.name":"Cheese Pizza"},function(err,res){
			data = res[0].name;
			done();
		});
	});

	it('check value',function(){
		expect(data).to.equal("Little Pizza Paradise");
	});
});

//check datatype by city and pizza name
describe('Test by city, pizza name and get data type',function(){
	before(function(done){
		db.res.find({city:"Bend","menus.name":"Cheese Pizza"},function(err,res){
			data = res[0];
			done();
		});
	});

	it('check data type',function(){
		expect(typeof(data._id)).to.equal("object");
		expect(typeof(data.id)).to.equal("string");
		expect(typeof(data.address)).to.equal("string");
		expect(typeof(data.city)).to.equal("string");
		expect(typeof(data.country)).to.equal("string");
		expect(typeof(data.latitude)).to.equal("number");
		expect(typeof(data.longitude)).to.equal("number");
		expect(typeof(data.menuPageURL)).to.equal("string");
		expect(typeof(data.menus)).to.equal("object");
		expect(typeof(data.name)).to.equal("string");
		expect(typeof(data.postalCode)).to.equal("number");
		expect(typeof(data.priceRangeMin)).to.equal("number");
		expect(typeof(data.priceRangeMax)).to.equal("number");
		expect(typeof(data.reviews)).to.equal("number");
		expect(typeof(data.ratings)).to.equal("number");
	});
});

////check value by city and pizza name(data in ascending order)
describe('Test by city, pizza name and get restaurant name of one document in ascending order',function(){
	before(function(done){
		db.res.aggregate({$match:{"city":"Bend","menus.name":"Cheese Pizza"}},{$sort:{"menus.amount":1}},function(err,res){
			data = res[0].name;
			done();
		});
	});

	it('check value in ascending order',function(){
		expect(data).to.equal("Little Pizza Paradise");
	});
});

//check value by city and pizza name(data in descending order)
describe('Test by city and pizza name and get restaurant name of one document in descending order',function(){
	before(function(done){
		db.res.aggregate({$match:{"city":"Bend","menus.name":"Cheese Pizza"}},{$sort:{"menus.amount":-1}},function(err,res){
			data = res[0].name;
			done();
		});
	});

	it('check value in descending order',function(){
		expect(data).to.equal("Little Pizza Paradise");
	});
});

//-----------------------------------------------------------

//check count by city and restaurant name
describe('Test by city and restaurant name and get count',function(){
	before(function(done){
		db.res.find({city:"Bend",name:"Little Pizza Paradise"},function(err,res){
			data = res.length;
			done();
		});
	});

	it('check count',function(){
		expect(data).to.equal(2);
	});
});

//check length by city and restaurant name
describe('Test by city and restaurant name and get length of one document',function(){
	before(function(done){
		db.res.find({city:"Bend",name:"Little Pizza Paradise"},function(err,res){
			data = Object.keys(res[0]).length;
			done();
		});
	});

	it('check length',function(){
		expect(data).to.equal(15);
	});
});

//check value by city and restaurant name
describe('Test by city and restaurant name and get address of first document',function(){
	before(function(done){
		db.res.find({city:"Bend",name:"Little Pizza Paradise"},function(err,res){
			data = res[0].address;
			done();
		});
	});

	it('check value',function(){
		expect(data).to.equal("Cascade Village Mall Across From Target");
	});
});

//check data type by city and restaurant name
describe('Test by city and restaurant name and get data type',function(){
	before(function(done){
		db.res.find({city:"Bend",name:"Little Pizza Paradise"},function(err,res){
			data = res[0];
			done();
		});
	});

	it('check data type',function(){
		expect(typeof(data._id)).to.equal("object");
		expect(typeof(data.id)).to.equal("string");
		expect(typeof(data.address)).to.equal("string");
		expect(typeof(data.city)).to.equal("string");
		expect(typeof(data.country)).to.equal("string");
		expect(typeof(data.latitude)).to.equal("number");
		expect(typeof(data.longitude)).to.equal("number");
		expect(typeof(data.menuPageURL)).to.equal("string");
		expect(typeof(data.menus)).to.equal("object");
		expect(typeof(data.name)).to.equal("string");
		expect(typeof(data.postalCode)).to.equal("number");
		expect(typeof(data.priceRangeMin)).to.equal("number");
		expect(typeof(data.priceRangeMax)).to.equal("number");
		expect(typeof(data.reviews)).to.equal("number");
		expect(typeof(data.ratings)).to.equal("number");
	});
});

//check value by city and restaurant name(data in ascending order)
describe('Test by city and restaurant name and get address of first document in ascending order',function(){
	before(function(done){
		db.res.aggregate({$match:{"city":"Bend","name":"Little Pizza Paradise"}},{$sort:{"menus.amount":1}},function(err,res){
			data = res[0].address;
			done();
		});
	});

	it('check value in ascending order',function(){
		expect(data).to.equal("Cascade Village Mall Across From Target");
	});
});

//check value by city and restaurant name(data in descending order)
describe('Test by city and restaurant name and get address of first document in descending order',function(){
	before(function(done){
		db.res.aggregate({$match:{"city":"Bend","name":"Little Pizza Paradise"}},{$sort:{"menus.amount":-1}},function(err,res){
			data = res[0].address;
			done();
		});
	});

	it('check value in descending order',function(){
		expect(data).to.equal("Cascade Village Mall Across From Target");
	});
});

//-----------------------------------------------------------

//check count by pizza name and restaurant name
describe('Test by pizza name and restaurant name and get count',function(){
	before(function(done){
		db.res.find({"menus.name":"Cheese Pizza",name:"Little Pizza Paradise"},function(err,res){
			data = res.length;
			done();
		});
	});

	it('check count',function(){
		expect(data).to.equal(1);
	});
});

//check length by pizza name and restaurant name
describe('Test by pizza name and restaurant name and get length of first document',function(){
	before(function(done){
		db.res.find({"menus.name":"Cheese Pizza",name:"Little Pizza Paradise"},function(err,res){
			data = Object.keys(res[0]).length;
			done();
		});
	});

	it('check length',function(){
		expect(data).to.equal(15);
	});
});

//check value by pizza name and restaurant name
describe('Test by pizza name and restaurant name and get city of first document',function(){
	before(function(done){
		db.res.find({"menus.name":"Cheese Pizza",name:"Little Pizza Paradise"},function(err,res){
			data = res[0].city;
			done();
		});
	});

	it('check value',function(){
		expect(data).to.equal("Bend");
	});
});

//check data type by pizza name and restaurant name
describe('Test by pizza name and restaurant name and get data type',function(){
	before(function(done){
		db.res.find({"menus.name":"Cheese Pizza",name:"Little Pizza Paradise"},function(err,res){
			data = res[0];
			done();
		});
	});

	it('check data type',function(){
		expect(typeof(data._id)).to.equal("object");
		expect(typeof(data.id)).to.equal("string");
		expect(typeof(data.address)).to.equal("string");
		expect(typeof(data.city)).to.equal("string");
		expect(typeof(data.country)).to.equal("string");
		expect(typeof(data.latitude)).to.equal("number");
		expect(typeof(data.longitude)).to.equal("number");
		expect(typeof(data.menuPageURL)).to.equal("string");
		expect(typeof(data.menus)).to.equal("object");
		expect(typeof(data.name)).to.equal("string");
		expect(typeof(data.postalCode)).to.equal("number");
		expect(typeof(data.priceRangeMin)).to.equal("number");
		expect(typeof(data.priceRangeMax)).to.equal("number");
		expect(typeof(data.reviews)).to.equal("number");
		expect(typeof(data.ratings)).to.equal("number");
	});
});

//check value by pizza name and restaurant name(data in ascending order)
describe('Test by pizza name and restaurant name and get city of first document in ascending order',function(){
	before(function(done){
		db.res.aggregate([{$match:{"menus.name":"Cheese Pizza","name":"Little Pizza Paradise"}},{$sort:{"menus.amount":1}}],function(err,res){
			data = res[0].city;
			done();
		});
	});

	it('check value in ascending order',function(){
		expect(data).to.equal("Bend");
	});
});

//check value by pizza name and restaurant name(data in descending order)
describe('Test by pizza name and restaurant name and get city of first document in descending order',function(){
	before(function(done){
		db.res.aggregate([{$match:{"menus.name":"Cheese Pizza","name":"Little Pizza Paradise"}},{$sort:{"menus.amount":-1}}],function(err,res){
			data = res[0].city;
			done();
		});
	});

	it('check value in descending order',function(){
		expect(data).to.equal("Bend");
	});
});

//-----------------------------------------------------------

//check count by city, pizza name and restaurant name
describe('Test by city, pizza name and restaurant name and get count',function(){
	before(function(done){
		db.res.find({city:"Bend","menus.name":"Cheese Pizza",name:"Little Pizza Paradise"},function(err,res){
			data = res.length;
			done();
		});
	});

	it('check count',function(){
		expect(data).to.equal(1);
	});
});

//check length by city, pizza name and restaurant name
describe('Test by city, pizza name and restaurant name and get length of one document',function(){
	before(function(done){
		db.res.find({city:"Bend","menus.name":"Cheese Pizza",name:"Little Pizza Paradise"},function(err,res){
			data = Object.keys(res[0]).length;
			done();
		});
	});

	it('check length',function(){
		expect(data).to.equal(15);
	});
});

//check value  by city, pizza name and restaurant name
describe('Test by city, pizza name and restaurant name and get address of one document',function(){
	before(function(done){
		db.res.find({city:"Bend","menus.name":"Cheese Pizza",name:"Little Pizza Paradise"},function(err,res){
			data = res[0].address;
			done();
		});
	});

	it('check value',function(){
		expect(data).to.equal("Cascade Village Mall Across From Target");
	});
});

//check data type  by city, pizza name and restaurant name
describe('Test by city, pizza name and restaurant name and get data type',function(){
	before(function(done){
		db.res.find({city:"Bend","menus.name":"Cheese Pizza",name:"Little Pizza Paradise"},function(err,res){
			data = res[0];
			done();
		});
	});

	it('check data type',function(){
		expect(typeof(data._id)).to.equal("object");
		expect(typeof(data.id)).to.equal("string");
		expect(typeof(data.address)).to.equal("string");
		expect(typeof(data.city)).to.equal("string");
		expect(typeof(data.country)).to.equal("string");
		expect(typeof(data.latitude)).to.equal("number");
		expect(typeof(data.longitude)).to.equal("number");
		expect(typeof(data.menuPageURL)).to.equal("string");
		expect(typeof(data.menus)).to.equal("object");
		expect(typeof(data.name)).to.equal("string");
		expect(typeof(data.postalCode)).to.equal("number");
		expect(typeof(data.priceRangeMin)).to.equal("number");
		expect(typeof(data.priceRangeMax)).to.equal("number");
		expect(typeof(data.reviews)).to.equal("number");
		expect(typeof(data.ratings)).to.equal("number");
	});
});

//check value by city, pizza name and restaurant name(data in ascending order)
describe('Test by city, pizza name and restaurant name and get address of one document in ascending order',function(){
	before(function(done){
		db.res.aggregate([{$match:{"city":"Bend","menus.name":"Cheese Pizza","name":"Little Pizza Paradise"}},{$sort:{"menus.amount":1}}],function(err,res){
			data = res[0].address;
			done();
		});
	});

	it('check value in ascending order',function(){
		expect(data).to.equal("Cascade Village Mall Across From Target");
	});
});

//check value by city, pizza name and restaurant name(data in descending order)
describe('Test by city, pizza name and restaurant name and get address of one document in descending order',function(){
	before(function(done){
		db.res.aggregate([{$match:{"city":"Bend","menus.name":"Cheese Pizza","name":"Little Pizza Paradise"}},{$sort:{"menus.amount":-1}}],function(err,res){
			data = res[0].address;
			done();
		});
	});

	it('check value in descending order',function(){
		expect(data).to.equal("Cascade Village Mall Across From Target");
	});
});

//-----------------------------------------------------------

//check count by city and get latitude and longitude
describe('Test by city and get count (get lat-long)',function(){
	before(function(done){
		db.res.find({city:"Bend"},{latitude:1,longitude:1,_id:0},function(err,res){
			data = res.length;
			done();
		});
	});

	it('check count',function(){
		expect(data).to.equal(4);
	});
});

//check length by city and get latitude and longitude
describe('Test by city and get length of one document (get lat-long)',function(){
	before(function(done){
		db.res.find({city:"Bend"},{latitude:1,longitude:1,_id:0},function(err,res){
			data = Object.keys(res[0]).length;
			done();
		});
	});

	it('check length',function(){
		expect(data).to.equal(2);
	});
});

//check value by city and get latitude and longitude
describe('Test by city and get latitude of first document (get lat-long)',function(){
	before(function(done){
		db.res.find({city:"Bend"},{latitude:1,longitude:1,_id:0},function(err,res){
			data = res[0].latitude;
			done();
		});
	});

	it('check value',function(){
		expect(data).to.equal(44.10266476);
	});
});

//check data type by city and get latitude and longitude
describe('Test by city and get data type of latitude (get lat-long)',function(){
	before(function(done){
		db.res.find({city:"Bend"},{latitude:1,longitude:1,_id:0},function(err,res){
			data = res[0];
			done();
		});
	});

	it('check type',function(){
		expect(typeof(data.latitude)).to.equal("number");
		expect(typeof(data.longitude)).to.equal("number");
	});
});