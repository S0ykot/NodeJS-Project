var db = require('./db');

module.exports ={
		insert : function (data,callback) {
			var sql = "INSERT INTO sub_domain values (?,?,?,?,?,?)";
			db.execute(sql, [null,data.topicName,data.topicDes,data.type,data.domain,data.supervisor], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
		},
		details : function (id,callback) {
			var sql = "Select * from sub_domain,domain_research,thesis_type where sub_domain.dom_id=domain_research.dom_id and thesis_type.type_id=sub_domain.type_id and sub_domain.fid=(select fid from faculty where faculty_id=?)";
			db.getResult(sql, [id], function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback(null);
			}
		});
		},
		groupID : function (id,callback) {
			var sql = "Select DISTINCT student_thesis.group_id from student_thesis,student,semester,sub_domain,thesis_type,domain_research WHERE student.sid=student_thesis.sid and semester.sem_id=student_thesis.sem_id AND sub_domain.type_id=thesis_type.type_id AND sub_domain.dom_id=domain_research.dom_id AND sub_domain.fid=(SELECT fid FROM faculty WHERE faculty.faculty_id=?)"
			db.getResult(sql, [id], function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback(null);
			}
		});
		}



		
}