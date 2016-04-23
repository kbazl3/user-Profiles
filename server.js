var express = require( 'express' );
var cors = require( 'cors' );
var bodyParser = require( 'body-parser' );
var session = require('express-session');
var config = require('./config');
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');
var port = 4545;
var app = express();
var corsOptions = {
    origin: 'http://localhost:4545'
};


//initialize dependencies
// app.use(cors());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));//What we are doing here is utilizing express's built in static method to serve static files from the directory we pass in. __dirname Is a node built-in, and is simply the name of the directory our server is being run from.
app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: true,
    resave: true 
}));//This will allow express-session to run on all endpoints with our chosen secret being used to track cookies.


app.post('/api/login', userCtrl.login);

app.get('/api/profiles', profileCtrl.something);






app.listen( port, function () {
  console.log( 'listening on port ', port );
} );
