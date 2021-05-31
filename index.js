const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const path = require('path');
const app = express();
require('dotenv').config();
var cors = require('cors')

app.use(cors()) 



const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


const port = process.env.PORT || 3500;

const MongoClient = require('mongodb').MongoClient;
const ConnectionString = "mongodb+srv://dbUser:iyte123@realmcluster.kivvp.mongodb.net/appointmentApp?retryWrites=true&w=majority";

mongoose.connect(ConnectionString);
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  //header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  //header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token');
  next();
});



app.use(bodyParser.json());

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
