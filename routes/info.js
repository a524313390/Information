var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var Info = require('../models/info');

app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
var expressJWT = require('express-jwt');

router.get('/test', function(req, res, next) {
	res.json({
		msg: 'info api'
	})
})

// 个人信息处理接口
router.post('/add', function(req, res, next) {
	const inf = {}

	console.log(req.user)
	if(!req.user.name) {
		return res.json({
			status: 1,
			msg: 'token失效'
		})
	} else {
		if(req.body.name) inf.name = req.body.name
		if(req.body.zhiwei) inf.zhiwei = req.body.zhiwei
		if(req.body.company) inf.company = req.body.company
		if(req.body.depar) inf.depar = req.body.depar

		var infoAdd = new Info(inf);
		infoAdd.save().then(doc => {
			res.json({
				status: 0,
				result: inf
			})
		})
	}
})
//获取所有信息
router.get('/', function(req, res, next) {
	
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
	if(!req.user) {
		res.json({
			status: 1,
			msg: 'token失效,或者未登录'
		})
	} else {
		//获取全部状态
		if(!page && !istatus ){
			Info.aggregate([{$group : {_id : "$state", total_num : {$sum : 1}}}]).exec((err,docs)=>{
				if(docs){
					res.json({
						status:0,
						result:docs
						
					})
				}else{
					res.json({
						status:1,
						result:err
						
					})
				}
			})
		}else{
			//分页获取	
			Info.paginate(querys, {
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
			
		}
		
	}

})

//获取单个信息
router.get('/:id', function(req, res, next) {
	if(!req.user.name) {
		res.json({
			status: 1,
			msg: 'token失效,或者未登录'
		})
	} else {
		console.log(req.params.id)
		Info.findOne({
			_id: req.params.id
		}).then(info => {
			res.json({
				status: 0,
				result: info
			})
		}).catch(err => {
			res.status(404).json({
				status: 1,
				msg: err
			})
		})
	}

})
//编辑信息
router.post('/edit', function(req, res, next) {

	let inf = {}

	if(!req.user.name) {
		return res.json({
			status: 1,
			msg: 'token失效'
		})
	} else {
		let _id = req.body.id;
		if(req.body.name) inf.name = req.body.name
		if(req.body.zhiwei) inf.zhiwei = req.body.zhiwei
		if(req.body.company) inf.company = req.body.company
		if(req.body.depar) inf.depar = req.body.depar

		Info.findOneAndUpdate({
			_id
		}, {
			$set: inf
		}, {
			new: true
		}).then(info => {
			res.json({
				status: 0,
				result: info
			})
		}).catch(err => {
			res.json({
				status: 1,
				msg: err
			})
		})
	}
})
//删除信息
router.delete('/delete', function(req, res, next) {

	let inf = {}

	if(!req.user.name) {
		return res.json({
			status: 1,
			msg: 'token失效'
		})
	} else {
		// console.log(typeof req.body.id)
		let _id = req.body.id;

		if(typeof _id == 'string') {
			//删除一条
			Info.findOneAndRemove({
				_id
			}).then(info => {
				res.json({
					status: 0,
					msg: '删除成功'
				})
			}).catch(err => {
				res.json({
					status: 1,
					result: err
				})
			})
		} else {
			//多条删除
			Info.remove({
				_id: {
					$in: _id
				}
			}).then(infos => {
				res.json({
					status: 0,
					msg: '删除成功'
				})
			}).catch(errs => {
				res.json({
					status: 1,
					msg: '删除失败'
				})
			})
		}

	}
})

//通过接口

router.post('/adopt', (req, res, next) => {

	if(!req.user) {
		res.json({
			msg: 'token失效'
		})
	} else {
		let _id = req.body.id;
		let name = req.body.shenname;

		Info.updateMany({
			_id
		}, {
			$set: {
				state: 0,
				shenname: name
			}
		}).then(updata => {
			if(updata) {
				res.json({
					status: 0,
					result: updata
				})
			} else {
				res.json({
					status: 0,
					msg: '审核失败'
				})
			}
		})
	}
})
//拒绝
router.post('/refuse', (req, res, next) => {

	if(!req.user) {
		res.json({
			msg: 'token失效'
		})
	} else {
		let _id = req.body.id;
		let name = req.body.shenname;
		let operation = req.body.operation;

		Info.updateMany({
			_id
		}, {
			$set: {
				state: 3,
				shenname: name,
				operation: operation
			}
		}).then(updata => {
			if(updata) {
				res.json({
					status: 0,
					result: updata
				})
			} else {
				res.json({
					status: 0,
					msg: '审核失败'
				})
			}
		})
	}
})
module.exports = router;