var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var path = require("path");
// var db = require("./models/");
const db = require('../models').db
var app = express();
const routes = require('./routes')
// server/routes/index.js
console.log('is this running?')
// logging and body-parsing

// app.use(morgan);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));
// app.use('/', (req, res, next) => {
//   console.log('something');
// })
app.use('/api', routes);
// failure to catch req above means 404, forward to error handler
app.use('/', function(req, res, next) {
  console.log('console log middleware')
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// handle any errors
app.use('/', function(err, req, res, next) {
  console.error(err, err.stack);
  res.status(err.status || 500);
  res.send("Something went wrong: " + err.message);
});

// listen on a port
var port = 3000;
app.listen(port, function() {
  console.log("The server is listening closely on port", port);
  db
    .sync()
    .then(function() {
      console.log("Synchronated the database");
    })
    .catch(function(err) {
      console.error("Trouble right here in River City", err, err.stack);
    });
});



// app.listen(3000,()=>console.log('Server is listening on 3000'));

// //sync database before server starts
// User.sync({force:true}) // syncing the databases. syncing user and page before starting server
//   .then(function(){
//     return Page.sync({force:true})
//   })
//   .then(function(){
//       app.listen(3000,()=>console.log('Server is listening on 3000'));
//     });
//   });
