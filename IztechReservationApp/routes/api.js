const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointmentModel');
const Customer = require('../models/customerModel');
const Test = require('../models/Test');
var mongoose = require('mongoose');



router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/appointments', (req, res, next) => {

  //this will return all the data, exposing only the id and action field to the client
  Appointment.find()
    .then(data => res.json(data))
    .catch(next)
});

router.get('/customers', (req, res, next) => {

  //this will return all the data, exposing only the id and action field to the client
  Customer.find()
    .then(data => res.json(data))
    .catch(next)

});


router.post('/appointments', (req, res, next) => {

  Appointment.create(req.body)
    .then(data => res.json(data))
    .catch(next)
});

router.post('/customers', (req, res, next) => {

  Customer.create(req.body)
    .then(data => res.json(data))
    .catch(next)

});



router.get('/findCustomer/:id', (req, res, next) => {

  var id = mongoose.Types.ObjectId(req.params.id);
  Customer.findById(id)
    .then(data => {
      res.json(data);
    })
    .catch(next)
});

router.get('/getTest2', (req, res, next) => {

  
  Test.find()
    .then(data => {
      res.json(data);
    })
    .catch(next)
});

router.post('/getWomenAppointments', (req, res, next) => {
    Test.find({ "artistId.0" : {$gt : 6 , $lt : 14}} )
    .then(data => {
      console.log("yazıyommmmm",data);
      res.json(data);
    })
    .catch(next)
});

router.post('/getMenAppointments', (req, res, next) => {
    Test.find({ "artistId.0" : { $lt : 7}} )
    .then(data => {
      console.log("yazıyommmmm",data);
      res.json(data);
    })
    .catch(next)
});

router.post('/getBeautyAppointments', (req, res, next) => {
    Test.find({ "artistId.0" : {$gt : 13}} )
    .then(data => {
      console.log("yazıyommmmm", data);
      res.json(data);
    })
    .catch(next)
});


router.post("/getTest", (req, res, next) => {
  Test.find()
    .then(data => res.json(data))
    .catch(next)
});

function getName(id){
  var name ;
    switch (id) {
      case 1:
        name = "Mustafa Kara";
        break;
      case 2:
        name = "Hikmet Günay";
        break;
      case 3: 
        name = "Gece Öztürk"; 
        break;
      case 4:
        name = "Berk Kartepe";
        break;
      case 5:
        name = "Emre Can";
        break;
      case 6:
        name = "Deniz Yılmaz";
        break;
      case 7:
        name = "Selin";
        break;
      case 8:
        name = "Naz";
        break;
      case 9:
        name = "Hayriye";
        break;
      case 10:
        name = "Ayşe";
        break;
      case 11:
        name = "Esin";
        break;
      case 12:
        name = "Nil";
        break;
      case 13:
        name = "Defne";
        break;
      case 14:
        name = "Armağan";
        break;
      case 15:
        name = "Atlas";
        break;
      case 16:
        name = "Aybars";
        break;
      case 17:
        name = "Karaca";
        break;
      case 18:
        name = "Room1";
        break;
      case 19:
        name = "Room2";
        break; 
      default:        
        break;
    };
  return name;
};

function getArtistNames(artistIds) {
  var artistName = [];
  for(var i = 0 ; i < artistIds.length ; i++){
    artistName.push(getName(artistIds[i]))
  }
  return artistName ;
};


router.post("/postTest", async (req, res, next)  => {
 
  console.log("posta geldim-----------------");
  var eventData = [];
  if (req.body.action == "insert" || (req.body.action == "batch" && req.body.added.length > 0)) {
    (req.body.action == "insert") ? eventData.push(req.body.value) : eventData = req.body.added;
   
    for (var i = 0; i < eventData.length; i++) {
      var sdate = new Date(eventData[i].StartTime);
      var edate = new Date(eventData[i].EndTime);
      if(sdate.getTime() < new Date()){
        console.log("geçmişe ekleme yapılamaz");
        break;
      }
      eventData[i].artistName = getArtistNames(eventData[i].artistId);
      
      await Test.create(eventData[i]);
    }
  }
  if (req.body.action == "update" || (req.body.action == "batch" && req.body.changed.length > 0)) {
    eventData = req.body.changed;
    console.log("updateyyimmmmm");
    for (var i = 0; i < eventData.length; i++) {
      delete eventData[i]._id;
      var sdate = new Date(eventData[i].StartTime);
      var edate = new Date(eventData[i].EndTime);
      if(sdate.getTime() < new Date()){
        console.log("geçmişte düzenleme yapılamaz");
        break;
      }

      eventData[i].StartTime = (new Date(sdate));
      eventData[i].EndTime = (new Date(edate));
      eventData[i].artistName = getArtistNames(eventData[i].artistId);
      
     await Test.updateOne({ "Id": eventData[i].Id }, eventData[i]);
    }
  }

  if (req.body.action == "remove" || (req.body.action == "batch" && req.body.deleted.length > 0)) {
    console.log("removedayım");
    eventData = req.body.deleted;
    for (var i = 0; i < eventData.length; i++) {
      console.log("FORDAYIM --------------------------------", eventData[i].Id );
      await Test.deleteOne({ "Id": eventData[i].Id });
     
    }
  }
  res.send(req.body);
});

module.exports = router;
