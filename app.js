// function callMe(name)
// {
//     console.log(name);
// }

// callMe('Tripti'); 

// var msg = '';
// console.log(global.msg);

// console.log(module);


const logi = require('./logger');

// const logi=1;
console.log(logi);
// logi.log('vvv');

logi.mylog('hi');

const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

const os = require('os');
const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

const fs = require('fs'); //built in module
const files = fs.readdirSync('./');
console.log(files);

const fros = fs.readdir('./', function(err, files){
    if(err) { console.log('Error', err); }
    else   console.log('Files',files);
});

const EventEmitter  = require('events') ; //accessing a class
const emitter = new EventEmitter();

//Register a listner
emitter.on('messageLogged', function(){
    console.log('Listener called');
});

//Raise an event
emitter.emit('messageLogged');

const EventEmitter2 = require('events');
const emitter2 = new EventEmitter2();

emitter2.on('messageLogged', (arg)=>{
    console.log('Listener called', arg);
});

emitter2.emit('messageLogged', {id:1, url:'http://'});

const EventEmitter3 = require('events');
const emitter3 = new EventEmitter3();

emitter3.on('logging', (arg)=>{
    console.log('Logging listener called', arg);
});

emitter3.emit('logging', {data:'Loggedin'});





