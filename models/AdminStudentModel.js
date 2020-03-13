var db = require('./db');

module.exports ={
	getByUserId: function(id, callback){
		var sql = "select * from student where student_id=?";
		db.getResult(sql, [id], function(result){
			if(result){
				callback(result);
			}else{
				callback(null);
			}
		});
	},

	addStudent: function(user, callback){
		var sql = "insert into student values(?,?,?,?,?,?,?,?,?,?,?)";
		db.execute(sql, [null, user.userid, user.fname, user.lname, user.email, user.contact, user.credit, user.cgpa, user.regDate, user.dept, user.status], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	getAllStudents:function(callback){
		var sql = "select * from student";
		db.getResult(sql, null, function(results){
			callback(results);
		});
	},

	/*getAllActiveStudents:function(callback){
		var sql = "select * from students where status = 'active'";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},*/

	/*getAllInactiveStudents:function(callback){
		var sql = "select * from students where status = 'inactive'";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},*/

	getById: function(id, callback){
		var sql = "select * from student where sid=?";
		db.getResult(sql, [id], function(result){
			if(result){
				callback(result);
			}else{
				callback(null);
			}
		});
	},

	updateStudent: function(user, callback){
		var sql = "update student set student_id=?, student_fname=?, student_lname=?, student_email=?, student_contact=?, student_credit=?, student_cgpa=?, student_dept=? where sid=?";
		db.execute(sql, [user.userid, user.fname, user.lname, user.email, user.contact, user.credit, user.cgpa, user.dept, user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	deleteStudent: function(id, callback){
		var sql = "delete from student where student_id=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	/*blockStudent: function(id, callback){
		var sql = "update students set status = 'inactive' where id=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},*/

	/*unblockStudent: function(id, callback){
		var sql = "update students set status = 'active' where id=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},*/

	/*approveStudent: function(id, callback){
		var sql = "update students set status = 'active' where userid=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},*/
}