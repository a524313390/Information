let mongoose = require('mongoose');

var mongoosePaginate = require('mongoose-paginate');

let Schema=mongoose.Schema;

let time=(new Date()).getTime().toString();
let companyModel=new Schema({
	uid:{
		type:Number,
		default:time.slice(-10)
	},
	//公司名称
	companyname:{
		type:String,
		required:true
	},
	//来源
	// 0名片  1身份证+营业执照
	source:{
		type:String,
		default:0,
	},
	bumen:{
		type:String,
		required:true
	},
	zhiwei:{
		type:String,
		required:true
	},
	//认证方式
	mode:{
		type:String,
		required:true
	},
	//认证人姓名
	names:{
		type:String,
		required:true
	},
	//手机
	phone:{
		type:Number,
		required:true
	},
	date:{
		type:Date,
		default:Date.now()
	},
	//审核时间
	stime:{
		type:Date,
		default:''
	},
	//审核人名称
	sname:{
		type:String,
		default:'',
		
	},
	//0 未认证  1 已认证 2 审核失败
	states:{
		type:Number,
		default:0
	},
	//审核失败理由
	opers:{
		type:String,
		default:''
	},
	//图片地址
	surl:{
		type:Array,
		required:true
	},
	
})

companyModel.plugin(mongoosePaginate);
let company=mongoose.model('company',companyModel,'company') 
module.exports=company;