function byGoodForCity(goodFor, city){
	var mongojs = require('mongojs');
	var db = mongojs('LTI', ['foodexpress']);
	db.foodexpress.aggregate([ {$match: {"Good for(suitable)":goodFor,City:city}},{$project: {Name:1, Address:1, Phone:1, City:1, State:1, Country:1, Rating:1}}, {$sort: {Rating:-1}}, function(err, res){ console.log(res);} ])
}

byGoodForCity("Couples", "Lorsch");