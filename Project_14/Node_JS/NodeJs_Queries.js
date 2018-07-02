--------------------------------------SEARCH------------------------------------------------
// Search by Hospital Name

var mongojs=require('mongojs');
var db=mongojs('P',['hos']);
db.hos.find({
		"Hospital Name":"CLAY COUNTY HOSPITAL"
            },function(err,res){
				console.log(res);
			       }
	   );


// Search by City name


var mongojs = require('mongojs');
var db = mongojs('P',['hos']);
db.hos.find({
		City:"EUFAULA"
	    },
            function(err,res){
				console.log(res);
	                     }
           );


// Search by State

var mongojs=require('mongojs');
var db=mongojs('P',['hos']);
db.hos.find({
		State:"AZ"
	    },function(err,res){
				console.log(res);
			       }
	   );


//Search by Hospital Ownership


var mongojs=require('mongojs');
var db=mongojs('P',['hos']);
db.hos.find({
		"Hospital Ownership":"Government - Hospital District or Authority"
	    },function(err,res){
				console.log(res);
			       }
	   );


// Search by Hospital Name and City

var mongojs=require('mongojs');
var db=mongojs('P',['hos']);
db.hos.find({
		"Hospital Name":"HIGHLANDS MEDICAL CENTER",
		City:"SCOTTSBORO"
	    },function(err,res){
				console.log(res);
	     		       }
	   );


// Search by Hospital Name and State

var mongojs=require('mongojs');
var db=mongojs('P',['hos']);
db.hos.find({
		"Hospital Name":"MANCHESTER MEMORIAL HOSPITAL",
		State:"CT"
	    },function(err,res){
				console.log(res);
	       		       }
           );


// Search by Hospital name and Hospital ownership

var mongojs=require('mongojs');
var db=mongojs('P',['hos']);
db.hos.find({
		"Hospital Name":"ST VINCENT'S BIRMINGHAM",
		"Hospital Ownership":"Voluntary non-profit - Private"
	    },function(err,res){
				console.log(res);
			       }
           );


// Search by City and State

var mongojs=require('mongojs');
var db=mongojs('P',['hos']);
db.hos.find({
		"City":"KAMUELA",
		State:"HI"
	    },function(err,res){
				console.log(res);
			       }
	   );


// Search by State and Hospital Ownership

var mongojs=require('mongojs');
var db=mongojs('P',['hos']);
db.hos.find({
		State:"AZ",
		"Hospital Ownership":"Voluntary non-profit - Private"
	    },function(err,res){
				console.log(res);
			       }
           );



// Search by City and Hospital ownership

var mongojs=require('mongojs');
var db=mongojs('P',['hos']);
db.hos.find({
		"City":"HAMILTON",
		"Hospital Ownership":"Voluntary non-profit - Private"
	    },function(err,res){
				console.log(res);
			       }
	   );


// Search by Hospital name , city and Hospital ownership

var mongojs=require('mongojs');
var db=mongojs('P',['hos']);
db.hos.find({
		"Hospital Name":"ROBERT WOOD JOHNSON UNIVERSITY HOSPITAL HAMILTON",
		"City":"HAMILTON",
		"Hospital Ownership":"Voluntary non-profit - Private"
	    },function(err,res){
				console.log(res);
			       }
           );


// Search by Hospital name , city, State and Hospital ownership

var mongojs=require('mongojs');
var db=mongojs('P',['hos']);
db.hos.find({
		"Hospital Name":"ROBERT WOOD JOHNSON UNIVERSITY HOSPITAL HAMILTON",
		"City":"HAMILTON",
		State:"NJ",
		"Hospital Ownership":"Voluntary non-profit - Private"
	    },function(err,res){
				console.log(res);
			       }
           );


// Search by Keyword for Hospital Name


var mongojs=require('mongojs');
var db=mongojs('P',['hos']);
db.hos.find({
		"Hospital Name":/.*medical center.*/gi
	    },function(err,res){
				console.log(res);
			       }
           );


-------------------------------------------SORT----------------------------------------------



// Sorting on the basis of Rating in ascending order

var mongojs = require('mongojs');
var db = mongojs('P',['hos']);
db.hos.aggregate([{$sort:{"Hospital overall rating":1}}],function(err,res){
				console.log(res);
	                     }
                 
		);


// Sorting on the basis of Rating in descending order

var mongojs = require('mongojs');
var db = mongojs('P',['hos']);
db.hos.aggregate([{$sort:{"Hospital overall rating":-1}}],function(err,res){
				console.log(res);
	                     }
                 
		);
