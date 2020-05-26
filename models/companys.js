let mongoose = require('mongoose');

var mongoosePaginate = require('mongoose-paginate');

let Schema=mongoose.Schema;

let time=(new Date()).getTime().toString();
let companyModel=new Schema({
	uid:{
		type:Number,
		default:time.slice(-10)
	},
	title:{
		type:String,
		required:true
	},
	name:{
		type:String,
		required:true
	},
	date:{
		type:Date,
		default:Date.now()
	},
	
	
})

companyModel.plugin(mongoosePaginate);
let company=mongoose.model('company_li',companyModel,'company_li') 
module.exports=company;