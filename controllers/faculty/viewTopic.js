var express = require('express');
var router = express.Router();
var subdomainModel = require.main.require('./models/facultySubDomainModel');
var studentThesisModel = require.main.require('./models/facultyStudentThesisModel');

router.get('*', function(req, res, next){
	if(req.cookies['token'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});




router.get('/',function(req,res){
		subdomainModel.details(req.cookies['username'],function(result) {
			if (result==null) {
				res.send('No Data found');
			}
			else
			{
				subdomainModel.groupID(req.cookies['username'],function(grp) {
					if (grp==null) {
						console.log("Null group");
					}
					else
					{
						console.log(grp);
						res.render('faculty/viewTopic',{userid:req.cookies['username'],data:result,group:grp});
					}
					
				});
				
			}
		});
		
});

router.get('/topicDetails/:id',function(req,res){
		studentThesisModel.detailsByGroup(req.params.id,function(result) {
			if (result==null) {
				res.send('No data Found');
			}
			else
			{
				studentThesisModel.studentInGroup(req.params.id,function(student) {
					if (student==null) {

					}
					else
					{
						res.render('faculty/topicDetails',{userid:req.cookies['username'],data:result,id:(req.params.id)-1,data1:student});
					}
					
				});
				
			}
		});
		
});



module.exports = router;