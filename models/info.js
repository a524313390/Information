let mongoose =require('mongoose');
// user 模型
const Schema=mongoose.Schema;
let time=(new Date()).getTime().toString();
var mongoosePaginate = require('mongoose-paginate');



const infoSchema=new Schema({
	uid:{
		type:String,
		default:time.slice(-10)
	},
	name:{
		type:String,
		required:true
	},
	zhiwei:{
		type:String,
		required:true
	},
	company:{
		type:String,
		required:true
	},
	depar:{
		type:String,
		required:true
	},
	shenname:{
		type:String,
		default:''
	},
	date:{
		type:Date,
		default:Date.now()
	},
	//1表示未处理，0表示已审核 其他表示已拒绝
	state:{
		type:Number,
		required:true,
		default:1
		
	},
	//0表示没有操作，其他表示拒绝
	operation:{
		type:String,
		required:true,
		default:0
		
	},
});
infoSchema.plugin(mongoosePaginate);
let Info=mongoose.model('info',infoSchema,'infos') 
module.exports=Info