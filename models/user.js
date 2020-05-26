let mongoose =require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
// user 模型
const Schema=mongoose.Schema;

const userSchema=new Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	avatar:{
		type:String,
		required:true
	},
	date:{
		type:Date,
		default:Date.now()
	},
	//0是管理员，1是普通用户
	istatus:{
		type:String,
		required:true,
		default:1,
		
	},
});

userSchema.plugin(mongoosePaginate);
let User=mongoose.model('user',userSchema,'users') 
module.exports=User