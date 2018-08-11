var express = require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongojs=require('mongojs');
var db = mongojs('final',['doctor','contact','appointment']);
app.use(express.static(__dirname));

//-------------------------------------------------------

    app.get('/list',function(req,res){
    db.doctor.find(function(err,docs){res.json(docs);})
    });

    app.get('/yourReciept/withId/:p_id',function(req,res){
    db.appointment.aggregate([
    {
     "$match": 
      {
        "p_id": req.params.p_id 
      }
    },
       {
         $lookup:
           {
             from: "doctor",
             localField: "d_sno",
             foreignField: "sno",
             as: "restDetails"
           }
      }
    ],function(err,docs){res.json(docs); })
    });

    // Data By Name
    app.get('/searchByName/:name',function(req,res){
    db.doctor.find({"name":req.params.name},function(err,docs){res.json(docs);})
    });
    // Data By Area
    app.get('/searchByArea/:area',function(req,res){
    console.log(req.params.area);
    db.doctor.find({"area":req.params.area},function(err,docs){res.json(docs);})
    });
    //Data By Qualification
    app.get('/searchByQual/:qualification',function(req,res){
    console.log(req.params.qualification);
    db.doctor.find({"qualification":req.params.qualification},function(err,docs){res.json(docs);})
    });
    //Data By Specialization
    app.get('/searchBySpec/:specialization',function(req,res){
    console.log(req.params.specialization);
    db.doctor.find({"specialization":req.params.specialization},function(err,docs){res.json(docs);})
    });
    //Data By Name Area
    app.get('/searchByName/:name/area/:area',function(req,res){
    console.log(req.params.name+"  "+req.params.area);
    db.doctor.find({"name":req.params.name,"area":req.params.area},function(err,docs){res.json(docs);})
    });
    //Data By name qual
    app.get('/searchByName/:name/qualification/:qualification',function(req,res){
    console.log(req.params.name+"  "+req.params.qualification);
    db.doctor.find({"name":req.params.name,"qualification":req.params.qualification},function(err,docs){res.json(docs);})
    });
    
    //Data by name Spec
    app.get('/searchByName/:name/specialization/:specialization',function(req,res){
    console.log(req.params.name+"  "+req.params.specialization);
    db.doctor.find({"name":req.params.name,"specialization":req.params.specialization},function(err,docs){res.json(docs);})
    });

    //Data By Name Area Qual
    app.get('/searchByName/:name/area/:area/qualification/:qualification',function(req,res){
    console.log(req.params.name+"  "+req.params.area+"  "+req.params.qualification);
    db.doctor.find({"name":req.params.name,"area":req.params.area,"qualification":req.params.qualification},function(err,docs){res.json(docs);})
    });          


    //Data By Name Area Spec
    app.get('/searchByName/:name/area/:area/specialization/:specialization',function(req,res){
    console.log(req.params.name+"  "+req.params.area+"  "+req.params.specialization);
    db.doctor.find({"name":req.params.name,"specialization":req.params.specialization,"area":req.params.area},function(err,docs){res.json(docs);})
    });

    //Data By Name Qual Spec
    app.get('/searchByName/:name/qualification/:qualification/specialization/:specialization',function(req,res){
    console.log(req.params.name+"  "+req.params.qualification+"  "+req.params.specialization);
    db.doctor.find({"name":req.params.name,"qualification":req.params.qualification,"specialization":req.params.specialization},function(err,docs){res.json(docs);})
    });

    //Data By Name Area Qual Spec
    app.get('/searchByName/:name/area/:area/qualification/:qualification/specialization/:specialization',function(req,res){
    console.log(req.params.name+"  "+req.params.area+"  "+req.params.qualification+"  "+req.params.specialization);
    db.doctor.find({"name":req.params.name,"area":req.params.area,"qualification":req.params.qualification,"specialization":req.params.specialization},function(err,docs){res.json(docs);})
    });

    // Data By Area Spec
    app.get('/searchByArea/:area/specialization/:specialization',function(req,res){
    console.log(req.params.area+"  "+req.params.specialization);
    db.doctor.find({"area":req.params.area,"specialization":req.params.specialization},function(err,docs){res.json(docs);})
    });

        
    //Data By Qualification Specialization 
    app.get('/searchByQual/:qualification/specialization/:specialization',function(req,res){
    console.log(req.params.qualification+"  "+req.params.specialization);
    db.doctor.find({"qualification":req.params.qualification,"specialization":req.params.specialization},function(err,docs){res.json(docs);})
    });

    //Data By Spec Qual Area
    app.get('/searchByArea/:area/qualification/:qualification/specialization/:specialization',function(req,res){
    console.log(req.params.area+"  "+req.params.qualification+"  "+req.params.specialization);
    db.doctor.find({"area":req.params.area,"qualification":req.params.qualification,"specialization":req.params.specialization},function(err,docs){res.json(docs);})
    });

    // For searching through any value from all fields
    app.get('/anySearch/:anySearch',function(req,res){
        db.doctor.find({$or:[{name:req.params.anySearch},{specialization:req.params.anySearch},{qualification:req.params.anySearch},{area:req.params.anySearch}]},function(err,docs){res.json(docs);})
        });

    app.get('/list/:sno',function(req,res){
    db.doctor.find({"sno":parseInt(req.params.sno)},function(err,docs){res.json(docs);})
    });

    app.get('/contact/:fullName/:Email/:Message',function(req,res){
    db.contact.insert({"fullName":req.params.fullName,"Email":req.params.Email,"Message":req.params.Message},function(err,docs){res.json(docs);})
    });

    app.get('/appointmentDetails/:p_name/:p_contact/:p_message/:d_sno/:p_id/bdate/:b_date/btime/:b_time',function(req,res){
    db.appointment.insert({"p_name":req.params.p_name,"p_contact":req.params.p_contact,"p_message":req.params.p_message,"d_sno":parseInt(req.params.d_sno),"p_id":req.params.p_id,"b_date":req.params.b_date,"b_time":req.params.b_time},function(err,docs){res.json(docs);})
    });

    app.get('/:p_id',function(req,res){
    db.appointment.find({"p_id":req.params.p_id},function(err,docs){res.json(docs);})
    });



app.listen(3000);
console.log("server running on port 3000");

app.listen(3000);
console.log("Server Started on port 3000");
