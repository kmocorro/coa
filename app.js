let express = require('express');
let app = express();


var server = require('http').Server(app);
var io = require('socket.io')(server);


let cookieSession = require('cookie-session');
let apiController = require('./controllers/apiController');
let apiSocket = require('./controllers/apiSocket');

let port = process.env.PORT || 9000;

//  static files, public folder
app.use('/', express.static(__dirname + '/public'));
//  template engine ejs
app.set('view engine', 'ejs');

//  session
app.set('trust proxy', 1) // trust first proxy
app.use(cookieSession({
 name: 'session',
 keys: ['key1', 'key2']
}));

apiController(app);
apiSocket(io);

server.listen(port);
