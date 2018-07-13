//Database Name: Project
//Collection Name: property




var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['property']);


describe('Check by value',function(){
function All(){

	                  before(function (done){
   		                     db.property.find({},
   		                     	              {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
   		                     	              function (err,res){
			                       	            //console.log(res);
				                                count=typeof res[0].City;
                                                console.log(count);
				                                done();
			                                  });
		                                   });

	it('All',function(){
		const result = count;
		expect(result).to.equal("string");
	});
}


//-----------------------------------------------------------------------------------

//2.SEARCH BY COUNTY

function county(){
	var count="";

                            before(function (done){
   		                     db.property.find({County:"NH-Grafton"},
   		                     	              {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
   		                     	              function (err,res){
			                       	            //console.log(res);
				                                count=typeof res[0].City;
                                                console.log(count);
				                                done();
			                                 });
		                                   });

	it('county',function(){
		const result = count;
		expect(result).to.equal("string");
	});
}



//-------------------------------------------------------------------------------------

//3.SEARCH BY CITY

function city(){
	var count="";

	                  before(function (done){
   		                     db.property.find({City:"Canaan"},
   		                     	              {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
   		                     	              function (err,res){
			                       	            //console.log(res);
				                                count=typeof res[0].City;
                                                console.log(count);
				                                done();
			                                 });
		                                   });

	it('city',function(){
		const result = count;
		expect(result).to.equal("string");
	});
};


//---------------------------------------------------------------------------------------

//4.SEARCH BY PRICE

function price(){
	var count="";

	                  before(function (done){
   		                     db.property.find({Price:{$gt:150000, $lt:200000}},
   		                     	              {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
   		                     	              function (err,res){
			                       	             //console.log(res);
				                                 count=typeof res[0].City;
                                                 console.log(count);
				                                 done();
			                                 });
		                                   });

	it('price',function(){
		const result = count;
		expect(result).to.equal("string");
	});
};

//---------------------------------------------------------------------------------------

//5.SEARCH BY COUNTY AND CITY

function countyAndcity(){
	var count="";

	                  before(function (done){
   		                     db.property.find({County:"NH-Grafton",City:"Canaan"},
   		                     	              {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
   		                     	              function (err,res){
			                       	             //console.log(res);
				                                 count=typeof res[0].City;
                                                 console.log(count);
				                                 done();
			                                 });
		                                   });

	it('county&city',function(){
		const result = count;
		expect(result).to.equal("string");
	});
}

//---------------------------------------------------------------------------------------

//6.SEARCH BY COUNTY AND PRICE

function countyAndprice(){
	var count="";

	                  before(function (done){
   		                     db.property.find({County:"NH-Grafton",Price:{$gt:150000, $lt:200000}},
   		                     	              {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
   		                     	              function (err,res){
			                       	             //console.log(res);
				                                 count=typeof res[0].City;
                                                 console.log(count);
				                                 done();
			                                 });
		                                    });

	it('county&price',function(){
		const result = count;
		expect(result).to.equal("string");
	});
}

//-----------------------------------------------------------------------------------------

//7.SEARCH BY CITY & PRICE

function cityAndprice(){
	var count="";

	                  before(function (done){
   		                     db.property.find({City:"Canaan",Price:{$gt:150000, $lt:200000}},
   		                     	              {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
   		                     	              function (err,res){
			                       	            //console.log(res);
				                                count=typeof res[0].City;
                                                console.log(count);
				                                done();
			                                  });
		                                    });

	it('city&price',function(){
		const result = count;
		expect(result).to.equal("string");
	});
}

//-----------------------------------------------------------------------------------------

//8.SEARCH BY COUNTY, CITY & PRICE

function countyAndcityAndprice(){
	var count="";

	                  before(function (done){
   		                     db.property.find({	County:"NH-Grafton",City:"Canaan",Price:{$gt:150000, $lt:200000}},
   		                     	              {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
   		                     	              function (err,res){
			                       	            //console.log(res);
				                                count=typeof res[0].City;
                                                console.log(count);
				                                done();
			                                 });
		                                   });

	it('county&city&price',function(){
		const result = count;
		expect(result).to.equal("string");
	});
}

//----------------------------------------------------------------------------------------


All();
county();
city();
price();
countyAndcity();
countyAndprice();
cityAndprice();
countyAndcityAndprice();

});
