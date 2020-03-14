//declaration
var express 		= require('express');
var path 			= require('path');
var bodyParser 		= require('body-parser');
var ejs 			= require('ejs');
var exSession 		= require('express-session');
var cookieParser 	= require('cookie-parser');
var login 			= require('./controllers/login');
var logout 			= require('./controllers/logout');
var adminHome 		= require('./controllers/admin/AdminHome');
var addStd 			= require('./controllers/admin/AdminStudentReg');
//var allocateFaculty = require('./controllers/AdminAllocateFaculty');
//var appvexternal	= require('./controllers/AdminApprovalExternal');
//var changePassword 	= require('./controllers/AdminChangePassword');
var offerTopic		= require('./controllers/admin/AdminOfferTopic');
//var profile			= require('./controllers/AdminProfile');
var appvStudent 	= require('./controllers/admin/AdminStudentApproval');
var blockStudent	= require('./controllers/admin/AdminStudentBlock');
var unblockStudent	= require('./controllers/admin/AdminStudentUnblock');
var studentList		= require('./controllers/admin/AdminStudentDetails');
var	blockTeacher	= require('./controllers/admin/AdminTeacherBlock');
var	unblockTeacher	= require('./controllers/admin/AdminTeacherUnblock');
var teacherList		= require('./controllers/admin/AdminTeacherDetails');
var addteacher		= require('./controllers/admin/AdminTeacherReg');
var topicList		= require('./controllers/admin/AdminTopicDetails');
var addDomain		= require('./controllers/admin/AdminDomainAdd');
var domainlist		= require('./controllers/admin/AdminDomainDetails');
//var uploadFile		= require('./controllers/AdminUploadFile');




var app = express();

//configuration
app.set('view engine', 'ejs');

//middleware
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my value', saveUninitialized: true, resave: false}));
app.use('/login', login);
app.use('/', login);
app.use('/AdminHome', adminHome);
app.use('/logout', logout);
app.use('/AdminStudentReg', addStd);
//app.use('/AdminAllocateFaculty',allocateFaculty);
//app.use('/AdminApprovalExternal',appvexternal);
//app.use('/AdminChangePassword',changePassword);
app.use('/AdminOfferTopic',offerTopic);
//app.use('/AdminProfile',profile);
app.use('/AdminStudentApproval',appvStudent);
app.use('/AdminStudentBlock',blockStudent);
app.use('/AdminStudentUnblock',unblockStudent);
app.use('/AdminStudentDetails',studentList);
app.use('/AdminTeacherBlock',blockTeacher);
app.use('/AdminTeacherUnblock',unblockTeacher);
app.use('/AdminTeacherDetails',teacherList);
app.use('/AdminTeacherReg',addteacher);
app.use('/AdminTopicDetails',topicList);
app.use('/AdminDomainAdd',addDomain);
app.use('/AdminDomainDetails',domainlist); 
//app.use('/AdminUploadFile',uploadFile);



//routes
app.get('/', function(req, res){
	res.render('index');
});



//server startup
app.listen(3000, function(){
	console.log('server started at 3000!');
});
