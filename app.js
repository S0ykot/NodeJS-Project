
//declaration
var express 		= require('express');
var path 			= require('path');
var bodyParser 		= require('body-parser');
var ejs 			= require('ejs');
var exSession 		= require('express-session');
var cookieParser 	= require('cookie-parser');
//var expressValidator= require('express-validator');
var login 			= require('./controllers/login');
var logout 			= require('./controllers/logout');
var adminHome 		= require('./controllers/admin/AdminHome');



var login 			= require('./controllers/login');
var logout 			= require('./controllers/logout');
var facultyHome 	= require('./controllers/faculty/home');


var app = express();

//configuration
app.set('view engine', 'ejs');


//middleware
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.use(exSession({secret: 'my value', saveUninitialized: true, resave: false}));
//app.use(expressValidator());
app.use('/login', login);
app.use('/', login);
app.use('/AdminHome', adminHome);
app.use('/logout', logout);

app.use('/login', login);
app.use('/', login);
app.use('/logout', logout);
app.use('/home', facultyHome);



//routes
app.get('/', function(req, res){

	res.render('index');
});







//server startup
app.listen(3000, function(){
	console.log('server started at 3000!');
});
