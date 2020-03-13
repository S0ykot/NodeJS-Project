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
		}
}