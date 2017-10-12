/**
 * Created by kapoor on 08-10-2017.
 */
// Node 23
var express = require('express');
var bodyParser = require('body-parser')

var app = express();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
/*app.use('/assets', function (req, res, next) {
    console.log('Middleware is :' + req.url);
    next();
});*/
app.get('/', function (req, res) {
    res.render('index');
});
app.get('/home', function (req, res) {
    res.send('This is the home page.');
});
app.get('/contact', function (req, res) {
    //console.log(req.query);
    res.render('contact', {qs: req.query});
});
/*app.get('/', function (req, res) {
    res.sendFile(__dirname + '/resources/html/index.html');
});
app.get('/home', function (req, res) {
    res.send('This is the home page.');
});
app.get('/contacts', function (req, res) {
    res.send('This is the contact page.');
});*/
//Dynamic data from DB
app.get('/profile/:name', function (req, res) {
    var data = {age:34, job:'developer', hobbies:['Swimming', 'Dancing', 'Gymming']};
    res.render('profile', {person: req.params.name, data:data});
    //res.send(__dirname + '/resources/html/contact.html');
});
// POST /contacts gets urlencoded bodies
app.post('/contact', urlencodedParser, function (req, res) {
    console.log(req.body);
    res.render('contact200', {data: req.body} );
})
app.listen(3000);
/*var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('Request Recieved: ' + req.url);
    if(req.url ==='/home' || req.url ==='/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/resources/html/index.html').pipe(res);
    } else if(req.url === '/contacts') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/resources/html/contact.html').pipe(res);
    } else if(req.url === '/api/secure') {
        var coder = [
            {name: 'Illia', role: 'Developer', salary: 23000},
            {name: 'Als', role: 'Tester', salary: 55000}

        ];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(coder));

    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/resources/html/404.html').pipe(res);

    }
});
server.listen(3000, '127.0.0.1');
console.log('Server listening');*/
/*// Node_18
var fs = require('fs');
var http = require('http');


var server = http.createServer(function(req, res) {
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
        name: 'Gaurav',
        job: 'fullStack',
        age: 'buddha'
    }
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000.');*/

/*// Node_17
var fs = require('fs');
var http = require('http');


var server = http.createServer(function(req, res) {
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    readStream.pipe(res);

});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000.');*/

/*
// Node_16 : Readable Streams
var fs = require('fs');
var http = require('http');


var server = http.createServer(function(req, res) {
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
    readStream.pipe(res);

});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000.');*/
/*
 // Node_14-15 : Readable Streams
readStream.on('data', function(chunk) {
    console.log('New chunk recieved.');
    writeStream.write(chunk);
});
*/

/*//Node_10
var fs = require('fs');
fs.unlink('./testCreateAsync/writeme.txt', function() {
    fs.rmdir('testCreateAsync');
})

/!*!//Asynchronous method : Delete the file
fs.mkdir('testCreateAsync', function() {
    fs.readFile('readme.txt', 'utf8', function (err, data) {
        fs.writeFile('./testCreateAsync/writeme.txt', data);
    });
});*!/

/!*!// Synchronous method : Delete the file
fs.unlink('writeme.txt');
fs.mkdirSync('TestCreation');
fs.rmdirSync('TestCreation');*!/*/

/*
Node_09
var fs = require('fs');
//Asynchronous method
fs.readFile('./readme.txt', 'UTF-8', function (error, data) {
    if(!error) {
        fs.writeFile('writeme.txt', data);
    }
});
console.log('asynchronous data');
/!*!//Synchronous method
var read = fs.readFileSync('./readme.txt', 'UTF-8');
console.log(read);
var write = fs.writeFileSync('./writeme.txt', read + " appended", 'UTF-8');*!/
*/


/*Node_08
var events = require('events');
var util = require('util');


var person = function(name) {
    this.name = name;
}

util.inherits(person, events.EventEmitter);
var buggu = new person('buggu');
var daida = new person('daida');
var chachu = new person('chachu');

var sibilings = [buggu, daida, chachu];
sibilings.forEach(function(sibiling) {
    sibiling.on('nickname', function (msg) {
        console.log(sibiling.name + " is " + msg)
    })
});

buggu.emit('nickname', "UX Designer");
daida.emit('nickname', "Architect");
chachu.emit('nickname', "Full stack");*/


/*var custEmitter = new events.EventEmitter();
custEmitter.on('custEvent', function(msg) {
    console.log(msg);
});

custEmitter.emit('custEvent', "Event is emitted.");*/

/*element.on('click', function() {});*/

/*Node_07
var stuff = require('./stuff');

console.log(stuff.adder(stuff.pi, 5));
console.log(stuff.pi);*/

/*
Node_06
var counter = require('./count');
console.log(counter(['Array', 'Lengths']));
*/


/*
Node_05
function callNow(func) {
    func();
}
 var subFunct = function() {
    console.log('I will be called by someone');
 }

callNow(subFunct);
*/

/*
 Node_04

 var time = 0;
 var timer = setInterval(function() {
 time += 2;
 console.log(time + " sec passed.");
 if(time>5) {
 clearInterval(timer);
 }
 }, 3000);*/