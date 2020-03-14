var db = require('./db');

module.exports ={
		detailsByGroup: function (id,callback) {
			var sql = "Select * from student_thesis,student,semester,sub_domain,thesis_type,domain_research WHERE student.sid=student_thesis.sid and semester.sem_id=student_thesis.sem_id AND sub_domain.type_id=thesis_type.type_id AND sub_domain.dom_id=domain_research.dom_id AND group_id=?";
			db.getResult(sql, [id], function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback(null);
			}
		});
		},
		studentInGroup : function (id,callback) {
			var sql = "Select DISTINCT student.student_id,student.student_fname,student.student_lname,student.student_email,student.student_contact from student_thesis,student,semester,sub_domain,thesis_type,domain_research WHERE student.sid=student_thesis.sid and semester.sem_id=student_thesis.sem_id AND sub_domain.type_id=thesis_type.type_id AND sub_domain.dom_id=domain_research.dom_id AND group_id=?";
			db.getResult(sql, [id], function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback(null);
			}
		});
		},
		progressLog : function (id,callback) {
			var sql = "SELECT DISTINCT student_thesis.group_id,sub_domain.subDom_name,student_thesis.thesis_progress,semester.sem_name FROM student_thesis,sub_domain,semester WHERE semester.sem_id=student_thesis.sem_id AND student_thesis.subDom_id=sub_domain.subDom_id AND sub_domain.fid=(SELECT fid FROM faculty WHERE faculty_id=?)";
			db.getResult(sql, [id], function(result){
			if(result.length > 0){
				callback(result);
			}else{
				callback(null);
			}
		});
		}
}