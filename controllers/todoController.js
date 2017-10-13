var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to database

mongoose.connect('mongodb://kapoor:gaurav230@ds119685.mlab.com:19685/todoapp');

//Create a schema - the blueprint of our data
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);

/*var item1 = Todo({item: 'Learn NodeJS'}).save(function (error) {
 if(error) {
 throw error;
 }
 console.log('item saved.');
 });*/

// var dummyData = [{item:'Learn NodeJS'}, {item:'Watch Angular JS Tutorials'}, {item:'Dont forget JAVA'}];
var urlEncoderParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {
//Request Handlers

    app.get('/todo', function (req, res) {
        // get data from mongo db and pass it to view
        Todo.find({}, function (err, data) {
            if(err) throw err;
            res.render('todo', {todos: data});
        });
    });

    app.post('/todo', urlEncoderParser, function (req, res) {
        // get data from the view and add it to mongo db
        var newToDo =  Todo(req.body).save(function (err, data) {
            if(err) throw err;
            res.json(data);
        });

    });

    app.delete('/todo/:item', function (req, res) {
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function (err, data) {
            if(err) throw err;
            res.json(data);
        })

    });
}


/*
var bodyParser = require('body-parser');

var dummyData = [{item:'Learn NodeJS'}, {item:'Watch Angular JS Tutorials'}, {item:'Dont forget JAVA'}];
var urlEncoderParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {
//Request Handlers

    app.get('/todo', function (req, res) {
        res.render('todo', {todos: dummyData});
    });

    app.post('/todo', urlEncoderParser, function (req, res) {
        dummyData.push(req.body);
        res.json(dummyData);
    });

    app.delete('/todo/:item', function (req, res) {
        dummyData = dummyData.filter(function (todo) {
            return todo.item.replace(/ /g, '-') != req.params.item;
        });
        res.json(dummyData);
    });
}*/
