
        var express = require('express');
        var app = express();
        var bodyParser = require('body-parser');
        app.use(bodyParser.json());
        var mongojs = require('mongojs');
        var db = mongojs('YELP',['yelp']);
        app.use(express.static(__dirname));
        //service call for listed users

        app.get('/keyword_state_city_categories_high_to_low/:keyword/:state/:city/:categories',function(req,res){
        console.log(req.params.keyword);
        console.log(req.params.state);
        console.log(req.params.city);
        console.log(req.params.categories);
        var cityVal = req.params.city;
        var keywordVal = req.params.keyword;
        var stateVal = req.params.state;
        var categoriesVal = req.params.categories;
        db.yelp.aggregate([
                          {$match:{$and:[{$or:[{"name":new RegExp('.*'+keywordVal+'.*','i')},{"categories":new RegExp('.*'+keywordVal+'.*','i')}]},{"state":stateVal},{"city":cityVal},{"categories":new RegExp('.*'+categoriesVal+'.*','i')}]}},
                          {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1}},{$sort:{stars:-1}}],
                          function(err,docs){res.json(docs);})
                          });
        app.listen(3000);
        console.log("server Running on port 3000");
