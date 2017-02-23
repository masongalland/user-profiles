//Require Modules
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
//Require our own files
var config = require('./config.js')
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');
//variables
var app = express();
var port = 9090;
var corsOptions = {
    origin: 'http://localhost:9090'
};
//Middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret}));

//Endpoints
app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriendsProfiles)

app.listen(port, function(){
    console.log('listening on port ', port)
});