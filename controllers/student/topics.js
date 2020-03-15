var express = require('express');
var router = express.Router();
const studentTopic= require.main.require('./models/StudentTopicModel');
const studentFaculty= require.main.require('./models/StudentFacultyModel');
const studentDomain= require.main.require('./models/StudentDomainModel');
const thesisType= require.main.require('./models/StudentThesisTypeModel');
//const model_group= require.main.require('./models/model_group');

router.get('*',function(req,res,next){
	if(req.cookies['username']!=null){
		next();
	}else{
		res.redirect('/login');
	}
});

router.get('/',function(req,res){
	if(req.cookies['username']!=null)
	{
		studentTopic.getAll(function(topicResults){
			if(topicResults){
				studentFaculty.getById(topicResults[0].fid, function(facultyResult){
					if(facultyResult){
						studentDomain.getById(topicResults[0].dom_id, function(domainResult){
							if(domainResult){
								thesisType.getById(topicResults[0].type_id, function(thesisTypeResult){
									if(thesisTypeResult){
										res.render('student/topics/index',{name:req.cookies['username'], user:topicResults, fac:facultyResult, dom:domainResult, type:thesisTypeResult});
										console.log(facultyResult);
									}else{
										res.render('student/topics/index',{name:req.cookies['username'], user:null, fac:null, dom:null, type:null});
									}
								});
							}else{
								res.render('student/topics/index',{name:req.cookies['username'], user:null, fac:null, dom:null, type:null});
							}
						});
					}else{
						res.render('student/topics/index',{name:req.cookies['username'], user:null, fac:null, dom:null, type:null});
					}
				});
			}else{
				res.render('student/topics/index',{name:req.cookies['username'], user:null, fac:null, dom:null, type:null});
			}
		});
		console.log('topic page requested!');
		
		
	}else{
		res.redirect('/logout');
	}
});

/*router.get('/topicDetails/:id',function(req,res){
	if(req.cookies['username']!=null)
	{
		model_topic.getById(req.params.id,function(results){
		res.render('topics/topicDetails',{name:req.cookies['username'], user:results});
		console.log(results);
		});
		console.log('topic page requested!');
		
		
	}else{
		res.redirect('/logout');
	}
});*/

/*router.get('/apply/:id',function(req,res){
	if(req.cookies['username']!=null)
	{
		model_group.getById(req.cookies['username'],function(results){
		if(results==null){
			res.render('createGroup/myGroup',{name:req.cookies['username'], user:results});
		}else{
			user={
				topicId:req.params.id,
				groupId:results[0].group_id
			}
			//console.log(user);
			model_group.update(user,function(results){
				if(results){
					res.redirect('/group');
				}else{
					res.redirect('/topics');
				}
			});
		}
		console.log(results);
		});
		console.log('topic page requested!');
		
		
	}else{
		res.redirect('/logout');
	}
});*/

/*router.post('/',function(req,res){
	if(req.cookies['username']!=null)
	{
		var data={
		name: req.cookies['username']
		}
		console.log('login page requested!');
	
		res.render('home',data);
	}else{
		res.redirect('/logout');
	}
});*/


module.exports = router;