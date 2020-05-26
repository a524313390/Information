var jwt = require('jsonwebtoken');

const token=function(val){
	let tok=jwt.verify(val, 'Bearer',function(err,data){
		if(err && !data){
			return {
				status:1,
				msg:'token失效'
			}
		}else{
			return {
				id:data.id,
				name:data.name,
				email:data.email,
				avatar:data.avatar,
				istatus:data.istatus
			}

		}
	});
	
	
	return tok;
}
module.exports=token