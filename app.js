var express = require('express');
var todoCtrl = require('./controllers/todoController');

var app = express();
//Setup template engine
app.set('view engine', 'ejs');

//static files, every route
app.use(express.static('./public'));

//Fire controllers
todoCtrl(app);
//Listen to port
app.listen(3000);
console.log('Server is listening on port 3000');