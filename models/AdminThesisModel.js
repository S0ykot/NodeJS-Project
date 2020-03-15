var db = require('./db');

module.exports ={

	allocateExternal: function(allocation, callback){
		var sql = "update student_thesis set external=?, ext_status= 1 where group_id=?";
		db.execute(sql, [allocation.external, allocation.group_id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
}