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
		studentModel.inactiveStudentDetails(null,function(result) {
			if (result==null) {
				res.render('faculty/studentApproval',{userid:req.cookies['username'],data:null});
			}
			else
			{
				res.render('faculty/studentApproval',{userid:req.cookies['username'],data:result});
			}
			
		});
		
});

router.get('/approve/:id',function (req,res) {
	var id = req.params.id;
	studentModel.approveStudent(id,function(status) {
		if (status) {
			res.redirect('/studentApproval');
		}
		else
		{
			res.redirect('/studentApproval');
		}
	})

});



module.exports = router;