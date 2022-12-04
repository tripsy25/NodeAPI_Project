const EventEmitter =  require('events');

const Logger = require('./event'); //custom created module
const logger = new Logger();

//Registering a listener 
logger.on('messageLogged',(arg)=>{
    console.log('Listener called',arg);
})

logger.log('message');