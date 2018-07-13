//Database Name: 'Project'
//Collection Name: 'property'




var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['property']);


describe('Check by value',function(){
function all(){

	                  before(function (done){
   		                     db.property.find({},
   		                     	              {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
   		                     	              function (err,res){
			                       	             //console.log(res);
				                                   count=res[0].City;
                                                   console.log(count);
				                                   done();
			                                 });
		                                  });

	it('All',function(){
		const result = count;
		expect(result).to.equal("Canaan");
	});
}


//-----------------------------------------------------------------------------------

//2.SEARCH BY COUNTY

function county(){
	var count=0;

                            before(function (done){
   		                     db.property.find({County:"NH-Grafton"},
   		                     	              {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
   		                     	              function (err,res){
			                       	           //console.log(res);
				                               count=res[0].City;
                                               console.log(count);
				                               done();
			                                 });
		                                  });

	it('County',function(){
		const result = count;
		expect(result).to.equal("Canaan");
	});
}



//-------------------------------------------------------------------------------------

//3.SEARCH BY CITY

function city(){
	var count=0;

	                  before(function (done){
   		                     db.property.find({City:"Canaan"},
   		                     	              {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
   		                     	              function (err,res){
			                       	            //console.log(res);
				                                count=res[0].City;
                                                console.log(count);
				                                done();
			                                  });
		                                    });

	it('City',function(){
		const result = count;
		expect(result).to.equal("Canaan");
	});
};


//---------------------------------------------------------------------------------------

//4.SEARCH BY PRICE

function price(){
	var count=0;

	                  before(function (done){
   		                     db.property.find({Price:{$gt:150000, $lt:200000}},
   		                     	              {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
   		                     	              function (err,res){
			                       	             //console.log(res);
				                                 count=res[0].City;
                                                 console.log(count);
				                                 done();
			                                 });
		                                   });

	it('Price',function(){
		const result = count;
		expect(result).to.equal("Canaan");
	});
};

//---------------------------------------------------------------------------------------

//5.SEARCH BY COUNTY AND CITY

function countyAndcity(){
	var count=0;

	                  before(function (done){
   		                     db.property.find({County:"NH-Grafton",City:"Canaan"},
   		                     	              {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
   		                     	              function (err,res){
			                       	            //console.log(res);
				                                count=res[0].City;
                                                console.log(count);
				                                done();
			                                 });
		                                  });

	it('County&City',function(){
		const result = count;
		expect(result).to.equal("Canaan");
	});
}

//---------------------------------------------------------------------------------------

//6.SEARCH BY COUNTY AND PRICE

function countyAndprice(){
	var count=0;

	                  before(function (done){
   		                     db.property.find({County:"NH-Grafton",Price:{$gt:150000, $lt:200000}},
   		                     	              {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
   		                     	              function (err,res){
			                       	            //console.log(res);
				                                count=res[0].City;
                                                console.log(count);
				                                done();
			                                  });
		                                    });

	it('County&Price',function(){
		const result = count;
		expect(result).to.equal("Canaan");
	});
}

//-----------------------------------------------------------------------------------------

//7.SEARCH BY CITY & PRICE

function cityAndprice(){
	var count=0;

	                  before(function (done){
   		                     db.property.find({City:"Canaan",Price:{$gt:150000, $lt:200000}},
   		                     	              {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
   		                     	              function (err,res){
			                       	            //console.log(res);
				                                count=res[0].City;
                                                console.log(count);
				                                done();
			                                 });
		                                  });

	it('City&Price',function(){
		const result = count;
		expect(result).to.equal("Canaan");
	});
}

//-----------------------------------------------------------------------------------------

//8.SEARCH BY COUNTY, CITY & PRICE

function countyAndcityAndprice(){
	var count=0;

	                  before(function (done){
   		                     db.property.find({	County:"NH-Grafton",City:"Canaan",Price:{$gt:150000, $lt:200000}},
   		                     	              {_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1},
   		                     	              function (err,res){
			                       	             //console.log(res);
				                                 count=res[0].City;
                                                 console.log(count);
				                                 done();
			                                 });
		                                  });

	it('County&City&Price',function(){
		const result = count;
		expect(result).to.equal("Canaan");
	});
}

//----------------------------------------------------------------------------------------

//9.SEARCH ALL & SORT BY PRICE(LOW to HIGH)

function allAndSortbyPrice(){
	var count=0;

	                  before(function (done){
   		                     db.property.aggregate([
                                                    {$match:{}},
                                                    {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                                                    {$sort:{Price:1}}
                                                   ],
   		                     	                   function (err,res){
			                       	                   //console.log(res);
				                                       count=res[0].City;
                                                       console.log(count);
				                                       done();
			                                       });
		                                     });

	it('All & Sort by Price ',function(){
		const result = count;
		expect(result).to.equal("Stockbridge");
	});
}

//----------------------------------------------------------------------------------------

//10.SEARCH ALL & SORT BY YEAR BUILT(NEWEST to OLDEST)

function allAndSortbyYear(){
	var count=0;

	                  before(function (done){
   		                     db.property.aggregate([
                                                    {$match:{}},
                                                    {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                                                    {$sort:{'Year Built':-1}}
                                                   ],
   		                     	                   function (err,res){
			                       	                   //console.log(res);
				                                       count=res[0].City;
                                                       console.log(count);
				                                       done();
			                                      });
		                                     });

	it('All & Sort by Year ',function(){
		const result = count;
		expect(result).to.equal("Canaan");
	});
}

//----------------------------------------------------------------------------------------

//11.SEARCH BY COUNTY & SORT BY PRICE(LOW to HIGH)

function countyAndSortbyPrice(){
	var count=0;

	                  before(function (done){
   		                     db.property.aggregate([
                                                    {$match:{County:"NH-Grafton"}},
                                                    {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                                                    {$sort:{Price:1}}
                                                   ],
   		                     	                   function (err,res){
			                       	                   //console.log(res);
				                                       count=res[0].City;
                                                       console.log(count);
				                                       done();
			                                      });
		                                     });

	it('County & Sort by Price ',function(){
		const result = count;
		expect(result).to.equal("Enfield");
	});
}

//----------------------------------------------------------------------------------------

//12.SEARCH BY CITY & SORT BY PRICE(LOW to HIGH)

function cityAndSortbyPrice(){
	var count=0;

	                  before(function (done){
   		                     db.property.aggregate([
                                                    {$match:{City:"Canaan"}},
                                                    {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                                                    {$sort:{Price:1}}
                                                   ],
   		                     	                   function (err,res){
			                       	                   //console.log(res);
				                                       count=res[0].City;
                                                       console.log(count);
				                                       done();
			                                      });
		                                     });

	it('City & Sort by Price ',function(){
		const result = count;
		expect(result).to.equal("Canaan");
	});
}

//----------------------------------------------------------------------------------------

//13.SEARCH BY PRICE & SORT BY PRICE(LOW to HIGH)

function priceAndSortbyPrice(){
	var count=0;

	                  before(function (done){
   		                     db.property.aggregate([
                                                    {$match:{Price: { $gt:150000, $lt:200000}}},
                                                    {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                                                    {$sort:{Price:1}}
                                                   ],
   		                     	                   function (err,res){
			                       	                   //console.log(res);
				                                       count=res[0].City;
                                                       console.log(count);
				                                       done();
			                                      });
		                                     });

	it('Price & Sort by Price ',function(){
		const result = count;
		expect(result).to.equal("Hartford");
	});
}

//----------------------------------------------------------------------------------------

//14.SEARCH BY COUNTY, CITY & SORT BY PRICE(LOW to HIGH)

function countyCityAndSortbyPrice(){
	var count=0;

	                  before(function (done){
   		                     db.property.aggregate([
                                                    {$match:{County:"NH-Grafton",City:"Canaan"}},
                                                    {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                                                    {$sort:{Price:1}}
                                                   ],
   		                     	                   function (err,res){
			                       	                   //console.log(res);
				                                       count=res[0].City;
                                                       console.log(count);
				                                       done();
			                                      });
		                                     });

	it('County, City & Sort by Price ',function(){
		const result = count;
		expect(result).to.equal("Canaan");
	});
}

//----------------------------------------------------------------------------------------

//15.SEARCH BY COUNTY,PRICE & SORT BY PRICE(LOW to HIGH)

function countyPriceAndSortbyPrice(){
	var count=0;

	                  before(function (done){
   		                     db.property.aggregate([
                                                    {$match:{County:"NH-Grafton", Price: { $gt:150000, $lt:200000}}},
                                                    {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                                                    {$sort:{Price:1}}
                                                   ],
   		                     	                   function (err,res){
			                       	                   //console.log(res);
				                                       count=res[0].City;
                                                       console.log(count);
				                                       done();
			                                      });
		                                     });

	it('County, Price & Sort by Price ',function(){
		const result = count;
		expect(result).to.equal("Lebanon");
	});
}

//----------------------------------------------------------------------------------------

//16.SEARCH BY CITY,PRICE & SORT BY PRICE(LOW to HIGH)

function cityPriceAndSortbyPrice(){
	var count=0;

	                  before(function (done){
   		                     db.property.aggregate([
                                                    {$match:{City:"Canaan", Price: { $gt:150000, $lt:200000}}},
                                                    {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                                                    {$sort:{Price:1}}
                                                   ],
   		                     	                   function (err,res){
			                       	                   //console.log(res);
				                                       count=res[0].City;
                                                       console.log(count);
				                                       done();
			                                      });
		                                     });

	it('City, Price & Sort by Price ',function(){
		const result = count;
		expect(result).to.equal("Canaan");
	});
}

//----------------------------------------------------------------------------------------

//17.SEARCH BY COUNTY, CITY, PRICE & SORT BY PRICE(LOW TO HIGH)

function countyCityPriceAndSortbyPrice(){
	var count=0;

	                  before(function (done){
   		                     db.property.aggregate([
                                                    {$match:{County:"NH-Grafton",City:"Canaan", Price: { $gt:150000, $lt:200000}}},
                                                    {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                                                    {$sort:{Price:1}}
                                                   ],
   		                     	                   function (err,res){
			                       	                   //console.log(res);
				                                       count=res[0].City;
                                                       console.log(count);
				                                       done();
			                                      });
		                                     });

	it('County, City, Price & Sort by Price ',function(){
		const result = count;
		expect(result).to.equal("Canaan");
	});
}

//----------------------------------------------------------------------------------------

//18.SEARCH BY COUNTY & SORT BY YEAR BUILT(NEWEST)

function countyAndSortbyYear(){
	var count=0;

	                  before(function (done){
   		                     db.property.aggregate([
                                                    {$match:{County:"NH-Grafton"}},
                                                    {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                                                    {$sort:{"Year Built":-1}}
                                                   ],
   		                     	                   function (err,res){
			                       	                   //console.log(res);
				                                       count=res[0].City;
                                                       console.log(count);
				                                       done();
			                                      });
		                                     });

	it('County & Sort by Year ',function(){
		const result = count;
		expect(result).to.equal("Canaan");
	});
}


//----------------------------------------------------------------------------------------

//19.SEARCH BY CITY & SORT BY YEAR BUILT(NEWEST)

function cityAndSortbyYear(){
	var count=0;

	                  before(function (done){
   		                     db.property.aggregate([
                                                    {$match:{City:"Canaan"}},
                                                    {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                                                    {$sort:{"Year Built":-1}}
                                                   ],
   		                     	                   function (err,res){
			                       	                   //console.log(res);
				                                       count=res[0].City;
                                                       console.log(count);
				                                       done();
			                                      });
		                                     });

	it('City & Sort by Year ',function(){
		const result = count;
		expect(result).to.equal("Canaan");
	});
}


//----------------------------------------------------------------------------------------

//20.SEARCH BY PRICE & SORT BY YEAR BUILT(NEWEST)

function priceAndSortbyYear(){
	var count=0;

	                  before(function (done){
   		                     db.property.aggregate([
                                                    {$match:{Price: { $gt:150000, $lt:200000}}},
                                                    {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                                                    {$sort:{"Year Built":-1}}
                                                   ],
   		                     	                   function (err,res){
			                       	                   //console.log(res);
				                                       count=res[0].City;
                                                       console.log(count);
				                                       done();
			                                      });
		                                     });

	it('Price & Sort by Year ',function(){
		const result = count;
		expect(result).to.equal("Lebanon");
	});
}

//----------------------------------------------------------------------------------------

//21.SEARCH BY COUNTY, CITY & SORT BY YEAR BUILT(NEWEST)

function countyCityAndSortbyYear(){
	var count=0;

	                  before(function (done){
   		                     db.property.aggregate([
                                                    {$match:{County:"NH-Grafton",City:"Canaan"}},
                                                    {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                                                    {$sort:{"Year Built":-1}}
                                                   ],
   		                     	                   function (err,res){
			                       	                   //console.log(res);
				                                       count=res[0].City;
                                                       console.log(count);
				                                       done();
			                                      });
		                                     });

	it('County, City & Sort by Year ',function(){
		const result = count;
		expect(result).to.equal("Canaan");
	});
}

//----------------------------------------------------------------------------------------

//22.SEARCH BY COUNTY,PRICE & SORT BY YEAR BUILT(NEWEST)

function countyPriceAndSortbyYear(){
	var count=0;

	                  before(function (done){
   		                     db.property.aggregate([
                                                    {$match:{County:"NH-Grafton",Price: { $gt:150000, $lt:200000}}},
                                                    {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                                                    {$sort:{"Year Built":-1}}
                                                   ],
   		                     	                   function (err,res){
			                       	                   //console.log(res);
				                                       count=res[0].City;
                                                       console.log(count);
				                                       done();
			                                      });
		                                     });

	it('County, Price & Sort by Year ',function(){
		const result = count;
		expect(result).to.equal("Lebanon");
	});
}

//----------------------------------------------------------------------------------------

//23.SEARCH BY CITY,PRICE & SORT BY YEAR BUILT(NEWEST)

function cityPriceAndSortbyYear(){
	var count=0;

	                  before(function (done){
   		                     db.property.aggregate([
                                                    {$match:{City:"Canaan",Price: { $gt:150000, $lt:200000}}},
                                                    {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                                                    {$sort:{"Year Built":-1}}
                                                   ],
   		                     	                   function (err,res){
			                       	                   //console.log(res);
				                                       count=res[0].City;
                                                       console.log(count);
				                                       done();
			                                      });
		                                     });

	it('City, Price & Sort by Year ',function(){
		const result = count;
		expect(result).to.equal("Canaan");
	});
}



//----------------------------------------------------------------------------------------

//24.SEARCH BY COUNTY, CITY, PRICE & SORT BY YEAR BUILT(NEWEST)

function countyCityPriceAndSortbyYear(){
	var count=0;

	                  before(function (done){
   		                     db.property.aggregate([
                                                    {$match:{County:"NH-Grafton",City:"Canaan",Price: { $gt:150000, $lt:200000}}},
                                                    {$project:{_id:0,County:1,City:1,Address:1,Price:1,Bedrooms:1,Bathrooms:1,"Year Built":1}},
                                                    {$sort:{"Year Built":-1}}
                                                   ],
   		                     	                   function (err,res){
			                       	                   //console.log(res);
				                                       count=res[0].City;
                                                       console.log(count);
				                                       done();
			                                      });
		                                     });

	it('County, City, Price & Sort by Year ',function(){
		const result = count;
		expect(result).to.equal("Canaan");
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
allAndSortbyPrice();
allAndSortbyYear();
countyAndSortbyPrice();
cityAndSortbyPrice();
priceAndSortbyPrice();
countyCityAndSortbyPrice();
countyPriceAndSortbyPrice();
cityPriceAndSortbyPrice();
countyCityPriceAndSortbyPrice();
countyAndSortbyYear();
cityAndSortbyYear();
priceAndSortbyYear();
countyCityAndSortbyYear();
countyPriceAndSortbyYear();
cityPriceAndSortbyYear();
countyCityPriceAndSortbyYear();

});
