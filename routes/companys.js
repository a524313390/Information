var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var Company = require('../models/companys');

router.get('/test', function(req, res) {
	res.json({
		msg: '12313'
	})
})
//获取公司认证拒绝理由
router.get('/', function(req, res) {
	console.log(req.query)
	let page = parseInt(req.query.page);
	let querys = {};
	let istatus = req.query.istatus;

	if(istatus) {
		querys.state = istatus
	}
	if(page == 0) {
		page = 1
	}

	let pageSize = parseInt(req.query.pageSize);
	let start = (page - 1) * pageSize;
	Company.paginate(querys, {
		offset: start,
		limit: pageSize,
		sort: {
			_id: -1
		}
	}).then(function(result) {

		res.json({
			status: 0,
			result: result
		})

	});
})
//删除信息
router.get('/delete', function(req, res) {
	let _id = req.query.id;
	let obj = {
		_id
	}
	Company.findOneAndRemove(obj).then(docs => {
		if(docs) {
			res.json({
				staus: 0,
				msg: '删除成功',
				result: docs
			})
		}
	})
})
//添加公司认证拒绝理由
router.post('/add', function(req, res) {
	let obj = {}
	obj.name = req.body.name;
	obj.title = req.body.title;
	Companys = new Company(obj);
	Companys.save().then(doc => {
		if(doc) {
			res.json({
				status: 0,
				result: doc
			})
		}
	})
})
//更新拒绝理由
router.post('/update', function(req, res) {
	let obj = {};
	let _id=req.body.id;
	obj.name = req.body.name;
	obj.title = req.body.title;
	Company.findOneAndUpdate(
		{_id},
		{$set:obj},
		{new:true}
	).then(docs=>{
		if(docs){
			res.json({
				status:0,
				msg:'修改成功',
				result:docs
			})
		}
	})
})


module.exports = router