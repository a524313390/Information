var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var util = require('util');
var fs = require('fs');
var Company = require('../models/company');
var sd = require('silly-datetime');

app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

function getStat(path) {
	return new Promise((resolve, reject) => {
		fs.stat(path, (err, stats) => {
			if (err) {
				resolve(false);
			} else {
				resolve(stats);
			}
		})
	})
}

router.get('/test', function(req, res, next) {
	res.json({
		mag: '231212313456456'
	})
})
//添加信息
router.post('/uploads', function(req, res) {

	var imgList = [];
	var time = sd.format(new Date(), 'YYYY-MM-DD');


	for (let i = 0; i < req.files.length; i++) {
		var file = req.files[i];
		var imgNames = file.originalname //获取文件的原始名字
		let extName = file.originalname.substring(imgNames.lastIndexOf('.') + 1, imgNames.length); //截

		let oldPath = file.path; //获取文件存储路径
		let imgName = file.filename; //获取文件的名字
		let path = file.destination + '/' + time + '/'; //获取当前存储的路径
		//判断文件夹是否存在，第一次不存在就创建，然后把图片移动到当前文件夹，第二次存在还是移动到当前文件夹
		fs.mkdir(path, (err) => {
			if (err) {

				imagePosition();
			} else {

				imagePosition();
			}
		})

		function imagePosition() {
			//文件重命名
			var fileName = Date.now().toString() + Math.ceil(Math.random() * 10000);
			let newPath = path + fileName + '.jpg';
			//把新的地址存在数组中,设置了uploads/是静态文件夹，把图片地址中的uploads/去除才能正常访问
			imgList.push(newPath.replace('uploads/', ''))
			//移动文件
			var result = fs.renameSync(oldPath, newPath);

			if (result == undefined) {
				//当所有的文件移动完毕，返回数据

				if (i == req.files.length - 1) {


					let obj = {}

					obj.companyname = req.body.companyname;
					obj.source = req.body.source;
					obj.mode = req.body.mode;
					obj.names = req.body.names;
					obj.phone = parseInt(req.body.phone);
					obj.bumen = req.body.bumen;
					obj.zhiwei = req.body.zhiwei;
					obj.surl = imgList
					
					var CompanyAdd = new Company(obj);
					CompanyAdd.save().then(doc => {
						res.json({
							status: 0,
							result: obj
						})
					})

					return;
				}

			}
		}

	}
});


//获取所有的信息

router.get('/', function(req, res) {
	let page = parseInt(req.query.page);
	let querys = {};
	let states = req.query.states;
	console.log(states)
	if (states && states != -1) {
		querys.states = states
	}
	if (page == 0) {
		page = 1
	}
	let pageSize = parseInt(req.query.pageSize);
	let start = (page - 1) * pageSize;
	//获取全部状态
	if(!page && !states ){
		Company.aggregate([{$group : {_id : "$states", total_num : {$sum : 1}}}]).exec((err,docs)=>{
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
	}
	
})

//审核通过
router.post('/success', function(req, res) {
	let obj = {};
	let _id = req.body.id;
	obj.stime = Date.now();
	obj.sname = req.body.sname;
	obj.states = 1;

	console.log(_id)
	console.log(obj)
	Company.findOneAndUpdate({
		_id
	}, {
		$set: obj
	}, {
		new: true
	}, function(err, doc) {
		if (err) {
			console.log(err)
		}
		res.json({
			status: 0,
			msg: '审核通过',
			result: doc
		})
	})

})

//拒绝通过
router.post('/refuse', function(req, res) {
	let obj = {};
	let _id = req.body.id;

	obj.states = 2;
	obj.opers = req.body.opers;
	obj.sname = req.body.name;
	console.log(_id)
	console.log(obj)
	Company.findOneAndUpdate({
		_id
	}, {
		$set: obj
	}, {
		new: true
	}, function(err, doc) {
		if (err) {
			console.log(err)
		}
		res.json({
			status: 0,
			msg: '拒绝成功',
			result: doc
		})
	})

})
module.exports = router;
