var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
var app=express();
var infoModel=require('../models/info_liModel');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

router.get('/test',(req,res,next)=>{	
	res.json({
		msg:'添加理由接口'
	})
})
//增加理由

router.post('/add',(req,res,next)=>{
	const info={}
	if(!req.user){
		res.json({
			msg:'token失效'
		})
	}else{
		info.title=req.body.title;
	
		info.name=req.body.name;
		infoModel.find({},(err,doc)=>{
			if(doc){
				info.ids=doc.length+1;
				let infos=new infoModel(info);
				
				infos.save().then(info=>{
					res.json({
						status:0,
						result:info
					})
				})
			}
			
		})
		
		
	}
})
//获取所有的数据
router.get('/',(req,res,next)=>{
	let page=parseInt(req.query.page);
	if(page==0){
		page=1;
	}
	let pageSize=parseInt(req.query.pageSize);
	let start=(page-1)*pageSize;
	console.log(page,pageSize,start)
	if(!page && !pageSize){
		infoModel.find().then((doc)=>{
			if(doc){
				res.json({
					status:0,
					result:doc
				})
			}else{
				res.json({
					msg:'请求出现错误'
				})
			}
		})
	}else{
		infoModel.paginate({},{offset:start,limit:pageSize,sort:{_id:-1}}).then(result=>{
			if(result){
				res.json({
					status:0,
					result
				})
			}
		})
	}
	
})
//编辑接口
router.post('/update',(req,res,next)=>{

	if(!req.user){
		res.json({
			msg:'token失效'
		})
	}else{
		let title=req.body.title;
		console.log(req.body.title)
		console.log(req.body._id)
		infoModel.findOneAndUpdate(
			{_id:req.body._id},
			{$set:{
				title:title
			}},
			{new:true}
		).then(info=>{
			console.log(info)
			if(info){
				res.json({
					status:0,
					result:info
				})
			}
		})		
	}
})


//删除信息
router.get('/delete',(req,res,next)=>{
	if(!req.user){
		res.json({
			msg:'token失效'
		})
	}else{
		let _id=req.query._id;
		infoModel.findOneAndRemove({_id}).then(doc=>{
			if(doc){
				res.json({
					status:0,
					result:doc
				})
			}
		})
	}
})


module.exports = router;