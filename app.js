/**
 * Created by kapoor on 08-10-2017.
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