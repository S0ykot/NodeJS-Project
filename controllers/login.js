var express = require('express');
var router = express.Router();
var md5 = require('md5');
var userModel	= require.main.require('./models/facultyUserModel');


router.get('/',function(req,res){
	console.log('login page requested!');
	res.render('login',{error:null});
});

router.post('/', function(req, res){
	
	var today = new Date();
	var sysDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var sysTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	userModel.getRole(req.body.uname,function(result) {
		if (result==null) {
			res.send("null");
		}
		else
		{
			var user ={
			userid: req.body.uname,
			password: req.body.password,
			role : result.role_name
			};
			if (user.role) {
				userModel.validate(user,function(status) {
					if (status==null) {
						res.redirect('/login');
					}
					else
					{
						if (status.status && user.role=='faculty') {
						console.log(status);
							res.cookie('username', req.body.uname);
							res.cookie('token', md5(md5(req.body.password)));
							res.redirect('/home');
					}
					else if (status.status && user.role=='student') {
						res.send("Student");
					}
					else if (status.status==1) {
						res.send("admin");
					}
					else
					{
						res.send("Kick on you ass");
					}
					}
				});
			}
			else
			{
				res.send("Pai nai");
			}
			}
	});
});

module.exports = router;