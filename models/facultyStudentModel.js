var db = require('./db');

module.exports ={
		getStudentDetails : function (id,callback) {
			var sql = "Select * from student";
			db.getResult(sql, null, function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback(null);
			}
		});
		},
		inactiveStudentDetails : function (id,callback) {
			var sql = "Select * from student where status=0";
			db.getResult(sql, null, function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback(null);
			}
		});
		},
		addStudent : function (data,callback) {
			var sql = "INSERT INTO student values (?,?,?,?,?,?,?,?,?,?,?)";
			db.execute(sql, [null,data.userid,data.fname,data.lname,data.email,data.contact,data.credit,data.cgpa,data.regDate,data.dept,1], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
		},
		approveStudent : function (id,callback) {
			var sql = "Update student SET status=1 where sid=?";
			db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
		}
}