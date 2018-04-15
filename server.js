var express = require('express');
var bodyparser = require('body-parser');
var connection = require('./connection');
var routes = require('./routes');
var morgan = require('morgan');
var port = process.env.PORT || 3000;
var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());


app.use(morgan('dev'));
connection.init();
routes.configure(app);
var server = app.listen(port, function() {
    
  console.log('Server listening on port ' + server.address().port);
});

