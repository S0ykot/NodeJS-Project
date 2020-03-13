var express = require('express');
var router = express.Router();
var studentModel	= require.main.require('./models/facultyStudentModel');


router.get('*', function(req, res, next){
	if(req.cookies['token'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});




router.get('/',function(req,res){
	studentModel.getStudentDetails("",function (result) {
		if (result==null) {
			res.send("No data found");
		}
		else
		{
			console.log('Student details page requested!');
			res.render('faculty/studentDetails',{userid:req.cookies['username'],data:result});
		}
	});
});

module.exports = router;