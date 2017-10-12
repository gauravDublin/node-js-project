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
}