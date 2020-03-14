var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator/check');
var studentThesisModel = require.main.require('./models/facultyStudentThesisModel');

router.get('*', function(req, res, next){
	if(req.cookies['token'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/',
	[check('progress', 'Must need value 0-100').isEmpty()],
	function(req,res){
	var errors = validationResult(req);
	studentThesisModel.progressLog(req.cookies['username'],function(result) {
		if (result==null) {
			res.send("No data found");
		}
		else
		{
			console.log(result);
			res.render('faculty/progressUpdate',{userid:req.cookies['username'],data:result,error:errors.mapped()});
		}
	});
	
});

router.post('/',
	[check('progress', 'Must need value 0-100').not().isEmpty()],
	function(req,res){
	var errors = validationResult(req);

	if (!errors.isEmpty()) {
					studentThesisModel.progressLog(req.cookies['username'],function(result) {
				if (result==null) {
					res.send("No data found");
				}
				else
				{
					res.render('faculty/progressUpdate',{userid:req.cookies['username'],data:result,error:errors.mapped()});
				}
			});
			
		}
		else
		{
			
		}




	
	
});


module.exports = router;