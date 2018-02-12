let bodyParser = require('body-parser');
let Promise = require('bluebird');
let moment = require('moment');

module.exports = function(io){
    
    io.on('connection', function(socket){
        /*
        socket.on('log box', function(data){
            let client_emit = data;
            let socket_obj = [];

             
            console.log(client_emit);
            io.emit('log box', client_emit);

            
        });
        */

    });
    
}