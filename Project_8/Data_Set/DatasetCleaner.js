//1. replacing => with :
var cursor= db.toys.find();
var doc,sel;
while(cursor.hasNext()){
	doc=cursor.next();
	sel=doc.sellers;
	print(sel);
	sel=sel.replace(/=>/g,":");
	print(sel);
	db.toys.update({_id:doc._id},{$set:{sellers:sel}});
}
print("Complete");


/*------------------------------------------------------------------------------------------------------------*/
//2. Replace extra character in sellers field(dataset)
var cursor = db.toys.find();
var i=0;
 while ( cursor.hasNext() ) {
	var row=cursor.next();
	var sellers1=row.sellers;
	sellers1=sellers1.replace("\\","");
	sellers1=sellers1.replace("\"{","{");
	sellers1=sellers1.replace("}\"","}");
	db.toys.update({_id:doc._id},{$set:{sellers:sel}});
}


/*------------------------------------------------------------------------------------------------------------*/
//3. Replace String separated by | to array of string (except 1st document coz i already did that separately)
//of 'customers_who_bought_this_item_also_bought' field
var cursor= db.toys.find();
var doc,custS,count=0;
while(cursor.hasNext()){
	count++;
	var doc=cursor.next();
	if(count==1)
		continue;
	custS= doc.customers_who_bought_this_item_also_bought;
	custS=custS.split("|");
	db.toys.update({_id:doc._id},{$set:{customers_who_bought_this_item_also_bought:custS}});
}
print("Completed");


/*------------------------------------------------------------------------------------------------------------*/
//4. Replace String separated by | to array of string of 'items_customers_buy_after_viewing_this_item' field
var cursor= db.toys.find();
var doc,custS,count=0;
while(cursor.hasNext()){
	count++;
	var doc=cursor.next();
	custS= doc.items_customers_buy_after_viewing_this_item;
	custS=custS.split("|");
	db.toys.update({_id:doc._id},{$set:{items_customers_buy_after_viewing_this_item:custS}});
	print(count);
}
print("Completed");


/*------------------------------------------------------------------------------------------------------------*/
//5. Replace String separated by | to array of string of 'customer_reviews' field
var cursor= db.toys.find();
var doc,custS,count=0;
while(cursor.hasNext()){
	count++;
	var doc=cursor.next();
	custS= doc.customer_reviews;
	custS=custS.split("|");
	db.toys.update({_id:doc._id},{$set:{customer_reviews:custS}});
	print(count);
}
print("Completed");


/*------------------------------------------------------------------------------------------------------------*/
//6. Replace String separated by | to array of string of 'customer_questions_and_answers' field
var cursor= db.toys.find();
var doc,custS,count=0;
while(cursor.hasNext()){
	count++;
	var doc=cursor.next();
	custS= doc.customer_questions_and_answers;
	custS=custS.split("|");
	db.toys.update({_id:doc._id},{$set:{customer_questions_and_answers:custS}});
	print(count);
}
print("Completed");


/*------------------------------------------------------------------------------------------------------------*/
//7. Remove duplicate fields
db.toysData.update({},{$unset:{"product_description":""}},{multi:true})
db.toysData.find({},{_id:0,"product_description":1}).pretty()
db.toysData.update({},{$unset:{"items_customers_buy_after_viewing_this_item":""}},{multi:true})
db.toysData.find({},{_id:0,"items_customers_buy_after_viewing_this_item":1}).pretty()


/*------------------------------------------------------------------------------------------------------------*/
