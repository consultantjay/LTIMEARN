var mongo=require("mongojs");
var db=mongo('LTI',['Jobs']);

function getData(json,responseObject,callback){

db.Jobs.aggregate(json,function(error,response){

callback(responseObject,response);

});

}

exports.fetchData=function(data,responseObject,callback){

getData(data,responseObject,callback);

}