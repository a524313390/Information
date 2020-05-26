var mongoose =require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema=mongoose.Schema;
let time=(new Date()).getTime().toString();
var infoLiShema=new Schema({
	title:{
		type:String,
		required:true
	},
	date:{
		type:Date,
		default:Date.now()
	},
	name:String,
	ids:{
		type:Number,
		default:0
	},
	uids:{
		type:Number,
		default:time.slice(-10)
	}
	
})



infoLiShema.plugin(mongoosePaginate);
let infoL=mongoose.model('info_li',infoLiShema,'info_lis');

module.exports=infoL