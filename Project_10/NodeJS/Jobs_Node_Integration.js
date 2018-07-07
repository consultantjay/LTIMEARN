/*
This module help us to retrive data from mongodb.This module contains integration of mongodb and node js.

@author:Tarun Rawat
@version:1.0
@DISCLAIMER:Following versions may undergo complete makeover



*/






var mongojs=require("mongojs");//importing mongojs,mongodb driver
var db=mongojs('LTI',['Jobs']);//passing db name and collection name



//This is single function that will communicate with mongodb and will fetch data for all queries
//it will take query as input .Here json param represents your query

function jobsFetcher(json,callback){
    db.Jobs.aggregate(json,function(error,response){ 
  	if(error){
console.log('Unable to fetch data ,contact Admin');
	}      
		else{ console.log("firing :",JSON.stringify(json));
  	 console.log(response);//printing response on console

}
   });
 }

//This function will return query to fetch data from mongodb
//This function contains mapping of query with requirement
//This is generalized function that will return desired query
function queryMaker(getBy,data,count){

 var query=[];

 if(getBy=="company"){
    query=[{$match:{"company":{$regex:data}}},{$limit:count}]; 
   //db.Jobs.arrgregate([{$match:{"company":{$regex:data}}},{$limit:count}])
  //This query will return all the jobs whose company starts with 'data'

} if(getBy=="joblocation_address"){
      query=[{$match:{"joblocation_address":{$regex:data}}},{$limit:count}];

     //db.Jobs.arrgregate([{$match:{"joblocation_address":{$regex:data}}},{$limit:count}])
     //This query will return all the jobs whose joblocation_address starts with 'data'

} if(getBy=="jobid"){
     query=[{$match:{"jobid":{$regex:data}}},{$limit:count}];
    //db.Jobs.arrgregate([{$match:{"jobid":{$regex:data}}},{$limit:count}])
    //This query will return all the jobs whose jobid starts with 'data'
}if(getBy=="skills"){
     query=[{$match:{"skills":{$regex:data}}},{$limit:count}];

    //db.Jobs.arrgregate([{$match:{"skills":{$regex:data}}},{$limit:count}])
    //This query will return all the jobs whose skills starting with 'data'

} if(getBy=="experience"){
     query=[{$match:{"experience":data}},{$limit:count}];

     //db.Jobs.arrgregate([{$match:{"experience":data}},{$limit:count}])
    //This query will return all the jobs whose experience is 'data'
}if(getBy=="jobtitle"){
     query=[{$match:{"jobtitle":{$regex:data}}},{$limit:count}];

      //db.Jobs.arrgregate([{$match:{"jobtitle":{$regex:data}}},{$limit:count}])
      //This query will return all the jobs whose jobtitle name starts with 'data'
}

        return query;

}


//TestCase 1:getting job by company
var query=queryMaker("company","LntInfotech",10);
jobsFetcher(query);

//TestCase 2:getting job by location_address
query=queryMaker("joblocation_address","Mumbai",10);
jobsFetcher(query);

//TestCase 3:getting job by jobid
query=queryMaker("jobid",50516003234,10);
jobsFetcher(query);

//TestCase 4:getting job by skills
query=queryMaker("skills","IT",10);
jobsFetcher(query);



